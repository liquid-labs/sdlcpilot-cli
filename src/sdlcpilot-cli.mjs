import { readFileSync } from 'node:fs'
import * as fsPath from 'node:path'

import { CATALYST_API_SPEC, CATALYST_HOME, CATALYST_PORT } from '@liquid-labs/catalyst-defaults'
import { LIQ_PLAYGROUND } from '@liquid-labs/liq-defaults'
import { startCLI } from '@liquid-labs/plugable-express-cli'

let versionCache

const getVersion = () => {
  if (versionCache === undefined) {
    // works for both prod and test
    const packagePath = fsPath.resolve(__dirname, '..', 'package.json')

    const pkgJSON = JSON.parse(readFileSync(packagePath, { encoding : 'utf8' }))
    const { version } = pkgJSON

    versionCache = version
  }

  return versionCache
}

const localServerDevPaths = process.env.CATALYST_LOCAL_ROOT === undefined
  ? [fsPath.join(LIQ_PLAYGROUND(), 'catalyst-server'),
    fsPath.join(LIQ_PLAYGROUND(), 'liquid-labs', 'catalyst-server')]
  : [process.env.CATALYST_LOCAL_ROOT]

// TODO: move this to the plugable-defaults
const defaultRegistries = [
  {
    name : 'Liquid Labs Canonical Catalyst Registry',
    url  : 'https://raw.githubusercontent.com/liquid-labs/liq-registry/main/registry.yaml'
  }
]

const cliSettings = {
  cliName       : 'sdlc',
  getVersion,
  cliHome       : CATALYST_HOME(),
  defaultRegistries,
  localServerDevPaths,
  noRegistries  : false,
  port          : CATALYST_PORT(),
  serverAPIPath : CATALYST_API_SPEC(),
  serverExec    : 'comply-server',
  serverHome    : CATALYST_HOME(),
  serverPackage : 'comply-server',
  serverVersion : 'latest'
}

const startSDLCPilotCLI = async() => await startCLI(cliSettings)

export { startSDLCPilotCLI }
