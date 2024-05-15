import {Command, Flags} from '@oclif/core'
import chalk from 'chalk'

import {DESCRIPTION} from './constants.js'
import {copyImages} from './utils/image.js'
import logger from './utils/logger.js'
import {copyMarkdownFiles} from './utils/markdown.js'
import {splash} from './utils/splash.js'

/**
 * Zenn2Press is a command that copies markdown files from Zenn to VitePress.
 */
export class Zenn2Press extends Command {
  static description = DESCRIPTION
  static flags = {
    configFile: Flags.string({char: 'c', description: 'Configuration File Paths', required: false}),
    destDir: Flags.string({
      char: 'd',
      description:
        'The VitePress directory path (e.g. docs/entries) where you want to place the markdown for the articles',
      required: true,
    }),
    destImagesDir: Flags.string({
      char: 'm',
      description: 'The VitePress directory path (e.g. public) where the image will be placed',
      required: true,
    }),
    srcDir: Flags.string({char: 's', description: 'Path of the root directory of Zenn content.', required: true}),
  }

  /**
   * Output properties to the console
   * @param srcArticlesDir
   * @param srcImagesDir
   * @param flags
   *
   * @returns {void}
   */
  logProperties(
    srcArticlesDir: string,
    srcImagesDir: string,
    destArticlesDir: string,
    destImagesDir: string,
    configFile?: string,
  ): void {
    logger.bold('Property:')
    logger.bold('  Source:')
    logger.info(`    - Articles: ${chalk.cyanBright(srcArticlesDir)}`)
    logger.info(`    - Image: ${chalk.cyanBright(srcImagesDir)}`)
    logger.info('\n')
    logger.bold('  Destination:')
    logger.info(`    - Articles: ${chalk.cyanBright(destArticlesDir)}`)
    logger.info(`    - Image: ${chalk.cyanBright(destImagesDir)}`)
    logger.info('\n')
    logger.info(`  Config: ${chalk.cyanBright(configFile ?? 'None')}`)
    logger.info('\n')
  }

  // The run method is the entry point of the command
  async run(): Promise<void> {
    // Output welcome message to the console
    await splash()

    const {flags} = await this.parse(Zenn2Press)
    const {configFile, destDir, destImagesDir, srcDir} = flags

    const srcArticlesDir = `${srcDir}/articles`
    const destArticlesDir = destDir
    const srcImagesDir = `${srcDir}/images`

    // Output properties to the console
    this.logProperties(srcArticlesDir, srcImagesDir, destArticlesDir, destImagesDir, configFile)

    // Copy markdown files from srcDir to destDir after conversion
    await copyMarkdownFiles(srcArticlesDir, destArticlesDir, configFile)

    logger.info('\n')

    // Copy images from srcDir to destDir
    await copyImages(srcImagesDir, destImagesDir)

    logger.info('\n')
    logger.success(`Completed`)
  }
}
