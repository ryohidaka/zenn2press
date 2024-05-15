import {expect} from 'chai'
import * as fs from 'node:fs'

import {readConfigFile} from '../../src/utils/config.js'

describe('readConfigFile', () => {
  it('should return undefined when no config file is provided', () => {
    const result = readConfigFile()
    expect(result).to.be.undefined
  })

  it('should return the frontmatter configuration when a config file is provided', () => {
    // Create a mock config file
    const mockConfig = JSON.stringify({frontmatter: {key: 'value'}})
    fs.writeFileSync('mock-config.json', mockConfig)

    const result = readConfigFile('mock-config.json')
    expect(result).to.deep.equal({key: 'value'})

    // Clean up the mock config file
    fs.unlinkSync('mock-config.json')
  })
})
