/* global afterAll beforeAll describe expect test */
import { startCatalystCLI } from '../catalyst-cli'

describe('startCatalystCLI', () => {
  let origArgv

  beforeAll(() => { origArgv = process.argv })
  afterAll(() => { process.argv = origArgv })

  test('can start the CLI process (defines necessary parameters)', () => {
    process.argv = ['node', 'script.js', '-v']
    expect(() => startCatalystCLI()).not.toThrow()
  })
})
