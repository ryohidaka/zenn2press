import matter from 'gray-matter'
import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * Asynchronously copies Markdown files.
 *
 * @param {string} srcDir - The directory containing the source Markdown files.
 * @param {string} destDir - The directory where the copied files will be saved.
 */
export const copyMarkdownFiles = async (srcDir: string, destDir: string) => {
  console.log('Starting to copy Markdown files...')

  // Read all files in the source directory
  const files = fs.readdirSync(srcDir)

  // Filter the Markdown files
  const markdownFiles = filterMarkdownFiles(files)

  for (const file of markdownFiles) {
    // Copy each Markdown file from the source directory to the dest directory.
    copyMarkdownFile(srcDir, destDir, file)
  }

  console.log('Copying of Markdown files is complete.')
}

/**
 * Filters and returns only the Markdown files from a list of files.
 *
 * @param {string[]} files - An array of file names or paths.
 * @returns {string[]} An array containing only the Markdown files.
 */
const filterMarkdownFiles = (files: string[]): string[] => {
  // Use the 'filter' method to filter out non-Markdown files
  const markdownFiles = files.filter((file) => path.extname(file) === '.md')

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
const copyMarkdownFile = (srcDir: string, destDir: string, file: string) => {
  // Construct the full path of the file in the source directory
  const filePath = path.join(srcDir, file)

  // Read the content of the file
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Parse the frontmatter of the file
  const {content, data} = matter(fileContent)

  // Check if the file has a title in its frontmatter
  if (!data.title) {
    console.warn(`No title found in the frontmatter of ${file}`)
    return
  }

  // Update the content of the file by adding the title at the beginning
  const updatedContent = `# ${data.title}\n${content}`

  // Stringify the updated content and the frontmatter data
  const newFileContent = matter.stringify(updatedContent, data)

  // Construct the full path of the file in the dest directory
  const outputFilePath = path.join(destDir, file)

  // Write the new content into the file in the dest directory
  fs.writeFileSync(outputFilePath, newFileContent, 'utf8')
}