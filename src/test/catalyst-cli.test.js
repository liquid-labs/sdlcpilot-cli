/* global afterAll beforeAll describe test */
import { startCatalystCLI } from '../catalyst-cli'

describe('startCatalystCLI', () => {
  let origArgv

  beforeAll(() => { origArgv = process.argv })
  afterAll(() => { process.argv = origArgv })

  test('can start the CLI process (defines necessary parameters)', async() => {
    process.argv = ['node', 'foo.js', '--version']

    await startCatalystCLI() // expect to not throw
  })
})
