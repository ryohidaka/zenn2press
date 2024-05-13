# %NAME%

[![npm version](https://badge.fury.io/js/%NAME%.svg)](https://badge.fury.io/js/%NAME%)
![build](https://github.com/%AUTHOR%/%NAME%/workflows/tests/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

%DESCRIPTION%

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

## Installation

You can install this library using npm:

```shell
npm install %NAME%
```

# Usage

<!-- usage -->

```sh-session
$ npm install -g %NAME%
$ %NAME% COMMAND
running command...
$ %NAME% (--version)
%NAME%/0.0.0 darwin-x64 node-v20.9.0
$ %NAME% --help [COMMAND]
USAGE
  $ %NAME% COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`%NAME% hello PERSON`](#%NAME%-hello-person)
- [`%NAME% hello world`](#%NAME%-hello-world)
- [`%NAME% help [COMMAND]`](#%NAME%-help-command)
- [`%NAME% plugins`](#%NAME%-plugins)
- [`%NAME% plugins add PLUGIN`](#%NAME%-plugins-add-plugin)
- [`%NAME% plugins:inspect PLUGIN...`](#%NAME%-pluginsinspect-plugin)
- [`%NAME% plugins install PLUGIN`](#%NAME%-plugins-install-plugin)
- [`%NAME% plugins link PATH`](#%NAME%-plugins-link-path)
- [`%NAME% plugins remove [PLUGIN]`](#%NAME%-plugins-remove-plugin)
- [`%NAME% plugins reset`](#%NAME%-plugins-reset)
- [`%NAME% plugins uninstall [PLUGIN]`](#%NAME%-plugins-uninstall-plugin)
- [`%NAME% plugins unlink [PLUGIN]`](#%NAME%-plugins-unlink-plugin)
- [`%NAME% plugins update`](#%NAME%-plugins-update)

## `%NAME% hello PERSON`

Say hello

```
USAGE
  $ %NAME% hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ %NAME% hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/%AUTHOR%/%NAME%/blob/v0.0.0/src/commands/hello/index.ts)_

## `%NAME% hello world`

Say hello world

```
USAGE
  $ %NAME% hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ %NAME% hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ryohidaka/%NAME%/blob/v0.0.0/src/commands/hello/world.ts)_

## `%NAME% help [COMMAND]`

Display help for %NAME%.

```
USAGE
  $ %NAME% help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for %NAME%.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `%NAME% plugins`

List installed plugins.

```
USAGE
  $ %NAME% plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ %NAME% plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/index.ts)_

## `%NAME% plugins add PLUGIN`

Installs a plugin into %NAME%.

```
USAGE
  $ %NAME% plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into %NAME%.

  Uses bundled npm executable to install plugins into /Users/ryohidaka/.local/share/%NAME%

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ %NAME% plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ %NAME% plugins add myplugin

  Install a plugin from a github url.

    $ %NAME% plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ %NAME% plugins add someuser/someplugin
```

## `%NAME% plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ %NAME% plugins inspect PLUGIN...

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
  $ %NAME% plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/inspect.ts)_

## `%NAME% plugins install PLUGIN`

Installs a plugin into %NAME%.

```
USAGE
  $ %NAME% plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

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
  Installs a plugin into %NAME%.

  Uses bundled npm executable to install plugins into /Users/ryohidaka/.local/share/%NAME%

  Installation of a user-installed plugin will override a core plugin.

  Use the NODE_CLI_TEMPLATE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NODE_CLI_TEMPLATE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ %NAME% plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ %NAME% plugins install myplugin

  Install a plugin from a github url.

    $ %NAME% plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ %NAME% plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/install.ts)_

## `%NAME% plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ %NAME% plugins link PATH [-h] [--install] [-v]

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
  $ %NAME% plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/link.ts)_

## `%NAME% plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ %NAME% plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ %NAME% plugins unlink
  $ %NAME% plugins remove

EXAMPLES
  $ %NAME% plugins remove myplugin
```

## `%NAME% plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ %NAME% plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/reset.ts)_

## `%NAME% plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ %NAME% plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ %NAME% plugins unlink
  $ %NAME% plugins remove

EXAMPLES
  $ %NAME% plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/uninstall.ts)_

## `%NAME% plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ %NAME% plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ %NAME% plugins unlink
  $ %NAME% plugins remove

EXAMPLES
  $ %NAME% plugins unlink myplugin
```

## `%NAME% plugins update`

Update installed plugins.

```
USAGE
  $ %NAME% plugins update [-h] [-v]

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
