# node-cli-template

[![npm version](https://badge.fury.io/js/node-cli-template.svg)](https://badge.fury.io/js/node-cli-template)
![build](https://github.com/ryohidaka/node-cli-template/workflows/tests/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Minimum configuration template for publishing cli packages to npm.

<!-- toc -->
* [node-cli-template](#node-cli-template)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Installation

You can install this library using npm:

```shell
npm install node-cli-template
```

# Usage

<!-- usage -->
```sh-session
$ npm install -g node-cli-template
$ node-cli-template COMMAND
running command...
$ node-cli-template (--version)
node-cli-template/0.0.0 linux-x64 node-v18.20.2
$ node-cli-template --help [COMMAND]
USAGE
  $ node-cli-template COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`node-cli-template help [COMMAND]`](#node-cli-template-help-command)
* [`node-cli-template plugins`](#node-cli-template-plugins)
* [`node-cli-template plugins add PLUGIN`](#node-cli-template-plugins-add-plugin)
* [`node-cli-template plugins:inspect PLUGIN...`](#node-cli-template-pluginsinspect-plugin)
* [`node-cli-template plugins install PLUGIN`](#node-cli-template-plugins-install-plugin)
* [`node-cli-template plugins link PATH`](#node-cli-template-plugins-link-path)
* [`node-cli-template plugins remove [PLUGIN]`](#node-cli-template-plugins-remove-plugin)
* [`node-cli-template plugins reset`](#node-cli-template-plugins-reset)
* [`node-cli-template plugins uninstall [PLUGIN]`](#node-cli-template-plugins-uninstall-plugin)
* [`node-cli-template plugins unlink [PLUGIN]`](#node-cli-template-plugins-unlink-plugin)
* [`node-cli-template plugins update`](#node-cli-template-plugins-update)

## `node-cli-template help [COMMAND]`

Display help for node-cli-template.

```
USAGE
  $ node-cli-template help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for node-cli-template.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.22/src/commands/help.ts)_

## `node-cli-template plugins`

List installed plugins.

```
USAGE
  $ node-cli-template plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ node-cli-template plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/index.ts)_

## `node-cli-template plugins add PLUGIN`

Installs a plugin into node-cli-template.

```
USAGE
  $ node-cli-template plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into node-cli-template.

  Uses bundled npm executable to install plugins into /home/runner/.local/share/node-cli-template

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ node-cli-template plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ node-cli-template plugins add myplugin

  Install a plugin from a github url.

    $ node-cli-template plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ node-cli-template plugins add someuser/someplugin
```

## `node-cli-template plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ node-cli-template plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ node-cli-template plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/inspect.ts)_

## `node-cli-template plugins install PLUGIN`

Installs a plugin into node-cli-template.

```
USAGE
  $ node-cli-template plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into node-cli-template.

  Uses bundled npm executable to install plugins into /home/runner/.local/share/node-cli-template

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ node-cli-template plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ node-cli-template plugins install myplugin

  Install a plugin from a github url.

    $ node-cli-template plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ node-cli-template plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/install.ts)_

## `node-cli-template plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ node-cli-template plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ node-cli-template plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/link.ts)_

## `node-cli-template plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ node-cli-template plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ node-cli-template plugins unlink
  $ node-cli-template plugins remove

EXAMPLES
  $ node-cli-template plugins remove myplugin
```

## `node-cli-template plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ node-cli-template plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/reset.ts)_

## `node-cli-template plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ node-cli-template plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ node-cli-template plugins unlink
  $ node-cli-template plugins remove

EXAMPLES
  $ node-cli-template plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/uninstall.ts)_

## `node-cli-template plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ node-cli-template plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ node-cli-template plugins unlink
  $ node-cli-template plugins remove

EXAMPLES
  $ node-cli-template plugins unlink myplugin
```

## `node-cli-template plugins update`

Update installed plugins.

```
USAGE
  $ node-cli-template plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.21/src/commands/plugins/update.ts)_
<!-- commandsstop -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
