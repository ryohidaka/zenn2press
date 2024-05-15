import {expect} from 'chai'
import * as fs from 'node:fs'
import * as path from 'node:path'

import {copyMarkdownFiles} from '../../src/utils/markdown.js'

describe('Markdown Files', () => {
  describe('copyMarkdownFiles', () => {
    it('should copy Markdown files from source directory to dest directory', async () => {
      // Setup: Create a source directory with some files
      const tmpDir = 'test/tmp'
      const srcDir = path.join(tmpDir, 'src')
      const destDir = path.join(tmpDir, 'dest')
      fs.mkdirSync(srcDir, {recursive: true})
      fs.mkdirSync(destDir, {recursive: true})

      // Create a Markdown file in the source directory for testing
      const body = `---
title: Test
---
# Test\nThis is a test.
      `
      fs.writeFileSync(path.join(srcDir, 'test.md'), body)

      await copyMarkdownFiles(srcDir, destDir)

      // Check if the file exists in the dest directory
      const exists = fs.existsSync(path.join(destDir, 'test.md'))
      expect(exists).to.be.true

      // Cleanup: Remove the test directories
      fs.rmSync(tmpDir, {force: true, recursive: true})
    })
  })
})
