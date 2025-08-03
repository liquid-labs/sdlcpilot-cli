# sdlcpilot-cli

Command line interface for SDLCPilot, a Software Development Life Cycle management tool. Currently support GitHub node projects.

- [Install](#install)
- [Usage](#usage)

## Install

1. Ensure node and npm are installed (see ['node not found'](#node-not-found))
2. Install 'sdlcpilot-cli' and 'comply-server'.
   ```bash
   npm i -g sdlcpilot-cli comply-server
   ```
3. Run:
   ```bash
   sdlc --setup
   ```
4. Open a new terminal window to pickup the SDLCPilot tab completion support, or type 'source .bashrc' or 'source .zshrc' on from your bash or zsh terminal respectively.
5. Install the base SDLC plugins:
   ```bash
   sdlc server plugins bundles add -- bundles=sdlcpilot-github-node
   ```

### Troubleshooting the install

#### sdlc not found

check where your global NPM packages are installed with:
```bash
npm ls -g
```

The first line should tell you where the NPM `lib` direcotry is located. Verify that if you swap that out `lib` for `bin`, you can `ls` the `sdlc` executable. It might be something like: `/opt/homebrew/bin` or `/Users/foo/.npm-global/bin`. Now [update your `PATH`](#update-your-path) to include the global NPM bin directory.

#### node not found

If node is not installed, refer to the [node package install page](https://nodejs.org/en/download/package-manager/) ([MacOS](https://nodejs.org/en/download/package-manager/#macos) and [Windows](https://nodejs.org/en/download/package-manager/#windows-1)) for installation instructions for your particular platform / distribution. You can also [install `nvm`](https://github.com/nvm-sh/nvm), which provides support for installing user-global `npm` packages without root priveleges.

If/once node is installed, [add the installation directory to your `PATH`](#update-your-path) (if not already done). For instance, if installing on MacOS with Homebrew, you would add `/opt/homebrew/bin` to the `PATH` var.

#### Update your PATH

For bash or zsh, add the following lines to `.bashrc` or `.zshrc` respectively:
```bash
PATH=/path/to/bin/dir:$PATH
export PATH
```

Where `/path/to/bin/dir` is replaced with the path of the bin directory in question.

## Usage

1. Create a project:
   ```
   sdlc projects create -- newProjectName=liquid-labs/indepndent-context
   ```
   This will both create a (initially private) repo and check it out in your playground base, which is `${HOME}/playground`. (This is not currently configurable.)
   -- or --
   You can `git clone` a project under `~/playground`. The standard expected layout is `~/playground/<git org>/<repo name>`. (In future, `sdlc` will support importing projects directly.)
3. Change dir to the new project: `cd independent-context`
4. Open an "Initial implementation" issue and start the work. After this, you should be on the workbranch.
   1. Create the issue in GitHub if you want to be verbose. Then start the work:
      ```
      sdlc work start -- issues=1
      ```
   2. Directly from the command line:
      ```
      sdlc work start -- issueTitle='Initial implementation' issueOverview='Implement basic functions' issueDeliverables="do X;;do Y"
      ```
5. Create a minimal project (TODO: I think this may be automated somewhere...):
   ```
   mkdkir src
   echo -e "console.log('Hello world!')\n" > src/index.mjs
   ```
6. Setup development cycle stuff (if creating a Javascript based project):
   1. `sdlc projects workflows local node-build add`
   2. Update the `package.json` scripts:
      ```
      "scripts": {
          "build": "make build",
          "test": "make test",
          "preversion": "make qa",
          "lint": "make lint",
          "lint:fix": "make lint-fix",
          "qa": "make qa"
        }
      ```
7. Do some work and save it: `sdlc work save -- summary="initial implementation"`
8. Create PR: `sdlc work submit`
9. Review and merge PR on GitHub.
10. Close the work and return to main: `sdlc work close`

Refer to the [user documentation](./docs/index.md)
