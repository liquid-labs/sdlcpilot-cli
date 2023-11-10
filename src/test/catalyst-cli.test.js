/* global afterAll beforeAll describe test */
import { startSDLCPilotCLI } from '../sdlcpilot-cli'

describe('startSDLCPilotCLI', () => {
  let origArgv

  beforeAll(() => { origArgv = process.argv })
  afterAll(() => { process.argv = origArgv })

  test('can start the CLI process (defines necessary parameters)', async() => {
    process.argv = ['node', 'foo.js', '--version']

    await startSDLCPilotCLI() // expect to not throw
  })
})
