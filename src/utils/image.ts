import * as fs from 'node:fs'
import * as path from 'node:path'

import logger from './logger.js'

/**
 * This function copies all files and directories from the source directory to the destination directory.
 *
 * @param {string} srcDir - The source directory path.
 * @param {string} destDir - The destination directory path.
 * @param {string[]} [include] - The optional list of files to include in the processing.
 * @param {string[]} [exclude] - The optional list of files to exclude from the processing.
 * @returns {void}
 */
export const copyImages = async (srcDir: string, destDir: string, include?: string[], exclude?: string[]) => {
  // Get all file paths from the source directory
  const filePaths = await getFilePaths(srcDir, include, exclude)
  // Copy each file to the destination directory
  await copyFiles(filePaths, srcDir, destDir)
}

/**
 * This function gets all file paths in a directory.
 *
 * @param {string} dirPath - The directory path.
 * @param {string[]} [include] - The optional list of files to include in the processing.
 * @param {string[]} [exclude] - The optional list of files to exclude from the processing.
 * @returns {Promise<string[]>} - The file paths.
 */
const getFilePaths = async (dirPath: string, include?: string[], exclude?: string[]): Promise<string[]> => {
  // Read the directory entries
  let entries = await fs.promises.readdir(dirPath, {withFileTypes: true})

  // If there are directories or files to include, filter the entries to only include those
  if (include && include.length > 0) {
    entries = entries.filter((dir) => include.includes(dir.name))
  }

  // If there are directories or files to exclude, filter the entries to exclude those
  if (exclude && exclude.length > 0) {
    entries = entries.filter((dir) => !exclude.includes(dir.name))
  }

  // Map each entry to its full path
  const filePaths = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dirPath, entry.name)

      // If the entry is a directory, recursively get file paths
      if (entry.isDirectory()) {
        return getFilePaths(fullPath)
      }

      return fullPath
    }),
  )

  return filePaths.flat()
}

/**
 * This function copies files to a target directory.
 *
 * @param {string[]} filePaths - The file paths.
 * @param {string} srcDir - The source directory.
 * @param {string} destDir - The destination directory.
 * @returns {void}
 */
const copyFiles = async (filePaths: string[], srcDir: string, destDir: string) => {
  logger.bold('Copy Images:')
  logger.info('Starting to copy image files...')

  const bar = logger.progressBar.create(filePaths.length)

  // For each file path, copy the file to the target directory
  for (const file of filePaths) {
    const fileName = path.relative(srcDir, file)
    const targetPath = path.join(destDir, fileName)

    // Create the directory structure in the destination
    fs.mkdirSync(path.dirname(targetPath), {recursive: true})

    fs.copyFileSync(file, targetPath)
    bar.increment({filename: file})
  }

  bar.stop()

  logger.success('Copying of Markdown files is complete.')
}
