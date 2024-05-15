import assert from 'node:assert'
import * as fs from 'node:fs'
import * as path from 'node:path'

import {copyImages} from '../../src/utils/image.js'

describe('copyImages', () => {
  it('should copy all files from the source directory to the destination directory', async () => {
    // Setup: Create a source directory with some files
    const tmpDir = 'test/tmp'
    const srcDir = path.join(tmpDir, 'src')
    const destDir = path.join(tmpDir, 'dest')
    fs.mkdirSync(srcDir, {recursive: true})
    fs.mkdirSync(destDir, {recursive: true})
    fs.writeFileSync(path.join(srcDir, 'file1.jpg'), '')
    fs.writeFileSync(path.join(srcDir, 'file2.png'), '')

    // Call the function under test
    await copyImages(srcDir, destDir)

    // Assert: Check that the files were copied
    assert(fs.existsSync(path.join(destDir, 'file1.jpg')))
    assert(fs.existsSync(path.join(destDir, 'file2.png')))

    // Cleanup: Remove the test directories
    fs.rmSync(tmpDir, {force: true, recursive: true})
  })
})
