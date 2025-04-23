# sdlcpilot-cli

Command line interface for SDLCPilot, a Software Development Life Cycle management tool. Currently support GitHub node projects.

- [Install](#install)
- [Usage](#usage)

## Install

1. Ensure node and npm are installed (see ['node not found'](#node-not-found))
2. Install 'sdlcpilot-cli'.
   ```bash
   npm i -g sdlcpilot-cli
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

If node is not installed, refer to the [node package install page](https://nodejs.org/en/download/package-manager/) ([MacOS](https://nodejs.org/en/download/package-manager/#macos) and [Windows](https://nodejs.org/en/download/package-manager/#windows-1)) for installation instructions for your particular platform / distribution.

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
   This will both create a (initially private) repo and check it out in your playground base. (<- TODO: explain this, link)
2. Change dir to the new project: `cd independent-context`
3. Open an "Initial implementation" issue and start the work. After this, you should be on the workbranch.
   1. Create the issue in GitHub if you want to be verbose. Then start the work:
      ```
      sdlc work start -- issues=1
      ```
   2. Directly from the command line:
      ```
      sdlc work start -- issueTitle='Initial implementation' issueOverview='Implement basic functions' issueDeliverables="do X;;do Y"
      ```
4. Do some work. TODO: submit work and publish release.

Refer to the [user documentation](./docs/index.md)
