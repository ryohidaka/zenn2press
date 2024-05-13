# zenn2press

[![npm version](https://badge.fury.io/js/zenn2press.svg)](https://badge.fury.io/js/zenn2press)
![build](https://github.com/ryohidaka/zenn2press/workflows/tests/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)



<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

## Installation

You can install this library using npm:

```shell
npm install zenn2press
```

# Usage

<!-- usage -->

```sh-session
$ npm install -g zenn2press
$ zenn2press COMMAND
running command...
$ zenn2press (--version)
zenn2press/0.0.0 darwin-x64 node-v20.9.0
$ zenn2press --help [COMMAND]
USAGE
  $ zenn2press COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`zenn2press hello PERSON`](#zenn2press-hello-person)
- [`zenn2press hello world`](#zenn2press-hello-world)
- [`zenn2press help [COMMAND]`](#zenn2press-help-command)
- [`zenn2press plugins`](#zenn2press-plugins)
- [`zenn2press plugins add PLUGIN`](#zenn2press-plugins-add-plugin)
- [`zenn2press plugins:inspect PLUGIN...`](#zenn2press-pluginsinspect-plugin)
- [`zenn2press plugins install PLUGIN`](#zenn2press-plugins-install-plugin)
- [`zenn2press plugins link PATH`](#zenn2press-plugins-link-path)
- [`zenn2press plugins remove [PLUGIN]`](#zenn2press-plugins-remove-plugin)
- [`zenn2press plugins reset`](#zenn2press-plugins-reset)
- [`zenn2press plugins uninstall [PLUGIN]`](#zenn2press-plugins-uninstall-plugin)
- [`zenn2press plugins unlink [PLUGIN]`](#zenn2press-plugins-unlink-plugin)
- [`zenn2press plugins update`](#zenn2press-plugins-update)

## `zenn2press hello PERSON`

Say hello

```
USAGE
  $ zenn2press hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ zenn2press hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/ryohidaka/zenn2press/blob/v0.0.0/src/commands/hello/index.ts)_

## `zenn2press hello world`

Say hello world

```
USAGE
  $ zenn2press hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ zenn2press hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ryohidaka/zenn2press/blob/v0.0.0/src/commands/hello/world.ts)_

## `zenn2press help [COMMAND]`

Display help for zenn2press.

```
USAGE
  $ zenn2press help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zenn2press.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `zenn2press plugins`

List installed plugins.

```
USAGE
  $ zenn2press plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zenn2press plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/index.ts)_

## `zenn2press plugins add PLUGIN`

Installs a plugin into zenn2press.

```
USAGE
  $ zenn2press plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into zenn2press.

  Uses bundled npm executable to install plugins into /Users/ryohidaka/.local/share/zenn2press

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zenn2press plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zenn2press plugins add myplugin

  Install a plugin from a github url.

    $ zenn2press plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zenn2press plugins add someuser/someplugin
```

## `zenn2press plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zenn2press plugins inspect PLUGIN...

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
  $ zenn2press plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/inspect.ts)_

## `zenn2press plugins install PLUGIN`

Installs a plugin into zenn2press.

```
USAGE
  $ zenn2press plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into zenn2press.

  Uses bundled npm executable to install plugins into /Users/ryohidaka/.local/share/zenn2press

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zenn2press plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zenn2press plugins install myplugin

  Install a plugin from a github url.

    $ zenn2press plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zenn2press plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/install.ts)_

## `zenn2press plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zenn2press plugins link PATH [-h] [--install] [-v]

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
  $ zenn2press plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/link.ts)_

## `zenn2press plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zenn2press plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zenn2press plugins unlink
  $ zenn2press plugins remove

EXAMPLES
  $ zenn2press plugins remove myplugin
```

## `zenn2press plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zenn2press plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/reset.ts)_

## `zenn2press plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zenn2press plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zenn2press plugins unlink
  $ zenn2press plugins remove

EXAMPLES
  $ zenn2press plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/uninstall.ts)_

## `zenn2press plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zenn2press plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zenn2press plugins unlink
  $ zenn2press plugins remove

EXAMPLES
  $ zenn2press plugins unlink myplugin
```

## `zenn2press plugins update`

Update installed plugins.

```
USAGE
  $ zenn2press plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/update.ts)_

<!-- commandsstop -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
