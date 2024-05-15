// Importing the 'fs' module for file system operations
import * as fs from 'node:fs'

import {Config} from './markdown.js'

/**
 * Reads a configuration file and returns the 'frontmatter' section as a JavaScript object.
 * If no configuration file is provided, it returns undefined.
 *
 * @param {string} [configFile] - The path to the configuration file. Optional.
 * @returns {Config | undefined} - The 'frontmatter' section of the configuration file as a JavaScript object, or undefined if no configuration file is provided.
 */
export const readConfigFile = (configFile?: string): Config | undefined => {
  // If no configuration file is provided, return undefined
  if (!configFile) {
    return undefined
  }

  // Initialize an empty object to hold the 'frontmatter' configuration
  let frontmatterConfig: Config = {}

  // Read the content of the configuration file
  const configContent = fs.readFileSync(configFile, 'utf8')

  // Parse the JSON content of the configuration file and extract the 'frontmatter' section
  frontmatterConfig = JSON.parse(configContent).frontmatter

  // Return the 'frontmatter' configuration
  return frontmatterConfig
}
