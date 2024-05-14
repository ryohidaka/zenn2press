import {Command} from '@oclif/core'

import {DESCRIPTION} from './constants.js'

/**
 * Zenn2Press is a command that copies markdown files from Zenn to VitePress.
 */
export class Zenn2Press extends Command {
  static description = DESCRIPTION

  async run(): Promise<void> {}
}
