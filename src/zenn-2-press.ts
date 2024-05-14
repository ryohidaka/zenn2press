import {Command, Flags} from '@oclif/core'

import {DESCRIPTION} from './constants.js'
import {copyMarkdownFiles} from './utils/markdown.js'

/**
 * Zenn2Press is a command that copies markdown files from Zenn to VitePress.
 */
export class Zenn2Press extends Command {
  static description = DESCRIPTION
  static flags = {
    destDir: Flags.string({
      char: 'd',
      description:
        'The VitePress directory path (e.g. docs/entries) where you want to place the markdown for the articles',
      required: true,
    }),
    srcDir: Flags.string({char: 's', description: 'Path of the root directory of Zenn content.', required: true}),
  }

  // The run method is the entry point of the command
  async run(): Promise<void> {
    const {flags} = await this.parse(Zenn2Press)
    const {destDir, srcDir} = flags

    const srcArticlesDir = `${srcDir}/articles`
    const destArticlesDir = destDir

    console.log(`
Property

  Source:
    - Articles: ${srcArticlesDir}

  Output:
    - Articles: ${destArticlesDir}
    `)

    // Copy markdown files from srcDir to destDir after conversion
    await copyMarkdownFiles(srcArticlesDir, destArticlesDir)
  }
}
