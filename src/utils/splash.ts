import chalk from 'chalk'
import figlet from 'figlet'

import logger from './logger.js'

/**
 * Function to display a splash screen with a welcome message.
 * This function uses the 'figlet' module to generate ASCII art from text,
 * and the 'chalk' module to colorize the output. The generated art and messages
 * are then logged to the console using a custom logger.
 *
 * @returns {void}
 */
export const splash = async () => {
  // Generate ASCII art from the text 'zenn2press'
  await figlet('zenn2press', (_err, data) => {
    // Log the generated ASCII art to the console in blue
    logger.info(chalk.blueBright.bold(data))
  })

  // Log an empty line for better readability
  logger.info('\n')

  // Log the welcome message to the console
  logger.info(chalk.bold('=== Convert your Zenn content to VitePress format ==='))

  // Log another empty line for better readability
  logger.info('\n')
}
