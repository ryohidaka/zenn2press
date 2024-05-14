import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * This function copies all files and directories from the source directory to the destination directory.
 *
 * @param {string} srcDir - The source directory path.
 * @param {string} destDir - The destination directory path.
 * @returns {void}
 */
export const copyImages = async (srcDir: string, destDir: string) => {
  // Get all file paths from the source directory
  const filePaths = await getFilePaths(srcDir)
  // Copy each file to the destination directory
  await copyFiles(filePaths, srcDir, destDir)
}

/**
 * This function gets all file paths in a directory.
 *
 * @param {string} dirPath - The directory path.
 * @returns {Promise<string[]>} - The file paths.
 */
const getFilePaths = async (dirPath: string): Promise<string[]> => {
  // Read the directory entries
  const entries = await fs.promises.readdir(dirPath, {withFileTypes: true})

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
  console.log('Starting to copy image files...')

  // For each file path, copy the file to the target directory
  for (const file of filePaths) {
    const fileName = path.relative(srcDir, file)
    const targetPath = path.join(destDir, fileName)

    // Create the directory structure in the destination
    fs.mkdirSync(path.dirname(targetPath), {recursive: true})

    fs.copyFileSync(file, targetPath)
  }

  console.log('Copying of Markdown files is complete.')
}
