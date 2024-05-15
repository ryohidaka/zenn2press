import matter from 'gray-matter'
import * as fs from 'node:fs'
import * as path from 'node:path'

import {readConfigFile} from './config.js'
import logger from './logger.js'

/* eslint @typescript-eslint/no-explicit-any: 0 */
export type Config = {[key: string]: any}

/**
 * Asynchronously copies Markdown files.
 *
 * @param {string} srcDir - The directory containing the source Markdown files.
 * @param {string} destDir - The directory where the copied files will be saved.
 * @param {string} [configFile] - The optional configuration file for frontmatter.
 * @param {string[]} [include] - The optional list of files to include in the processing.
 * @param {string[]} [exclude] - The optional list of files to exclude from the processing.
 */
export const copyMarkdownFiles = async (
  srcDir: string,
  destDir: string,
  configFile?: string,
  include?: string[],
  exclude?: string[],
) => {
  logger.bold('Copy Markdown:')
  logger.info('Starting to copy Markdown files...')

  // Read all files in the source directory
  const files = fs.readdirSync(srcDir)

  // Filter the Markdown files based on the include and exclude lists
  const markdownFiles = filterMarkdownFiles(files, include, exclude)

  // Read the configuration file for frontmatter, if provided
  const frontmatterConfig = readConfigFile(configFile)

  const bar = logger.progressBar.create(markdownFiles.length)

  for (const file of markdownFiles) {
    // Copy each Markdown file from the source directory to the dest directory.
    copyMarkdownFile(srcDir, destDir, file, frontmatterConfig)
    bar.increment({filename: file})
  }

  bar.stop()

  logger.success('Copying of Markdown files is complete.')
}

/**
 * Filters and returns only the Markdown files from a list of files.
 *
 * @param {string[]} files - An array of file names or paths.
 * @param {string[]} [include] - The optional list of files to include in the processing.
 * @param {string[]} [exclude] - The optional list of files to exclude from the processing.
 * @returns {string[]} An array containing only the Markdown files.
 */
const filterMarkdownFiles = (files: string[], include?: string[], exclude?: string[]): string[] => {
  // Use the 'filter' method to filter out non-Markdown files
  let markdownFiles = files.filter((file) => path.extname(file) === '.md')

  // If there are directories or files to include, filter the entries to only include those
  if (include && include.length > 0) {
    markdownFiles = markdownFiles.filter((file) => addMdExt(include).includes(file))
  }

  // If there are directories or files to exclude, filter the entries to exclude those
  if (exclude && exclude.length > 0) {
    markdownFiles = markdownFiles.filter((file) => !addMdExt(exclude).includes(file))
  }

  // Return the array of Markdown files
  return markdownFiles
}

/**
 * Copies a Markdown file from the source directory to the dest directory.
 * If the file already exists in the dest directory, it will be overwritten.
 *
 * @param {string} srcDir - The directory containing the source Markdown files.
 * @param {string} destDir - The directory where the copied files will be saved.
 * @param {string} file - The name of the file to be copied.
 */
const copyMarkdownFile = (srcDir: string, destDir: string, file: string, frontmatterConfig?: Config) => {
  // Construct the full path of the file in the source directory
  const filePath = path.join(srcDir, file)

  // Read the content of the file
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Parse the frontmatter of the file
  const {content, data} = matter(fileContent)

  const mergedData = {...data, ...frontmatterConfig}

  // Check if the file has a title in its frontmatter
  if (!mergedData.title) {
    logger.warn(`No title found in the frontmatter of ${file}`)
    return
  }

  // Update the content of the file by adding the title at the beginning
  const updatedContent = `# ${mergedData.title}\n${content}`

  // Stringify the updated content and the frontmatter data
  const newFileContent = matter.stringify(updatedContent, mergedData)

  // Construct the full path of the file in the dest directory
  const outputFilePath = path.join(destDir, file)

  // Write the new content into the file in the dest directory
  fs.writeFileSync(outputFilePath, newFileContent, 'utf8')
}

/**
 * This function adds a '.md' extension to a given paths if it doesn't already have one.
 * @param {string} filename - The name of the file.
 * @returns {string[]} - The paths with a '.md' extension, or the original path if it already had a '.md' extension.
 */
const addMdExt = (paths: string[]): string[] =>
  paths.map((path) => {
    // Check if the path ends with '.md'
    if (!path.endsWith('.md')) {
      // If not, append '.md' to the path
      return path + '.md'
    }

    // If the path already ends with '.md', return the original path
    return path
  })
