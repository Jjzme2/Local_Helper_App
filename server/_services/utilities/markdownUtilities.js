import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'

// const MarkdownIt = require('markdown-it')
// const hljs = require('highlight.js')

class MarkdownUtil {
  constructor() {
    this.defaultMd = new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value
          } catch (e) {
            throw new Error('Error in highlighting code block: ' + e.message)
          }
        }
        return '' // use external default escaping
      }
    })
      .use(markdownItAttrs) // Enable custom classes
      .use(markdownItFootnote) // Enable footnotes
      .use(markdownItTocDoneRight) // Enable Table of Contents
  }

  // Function to create a metadata object from a metadata block
  createMetaDataFromMetaBlock(metaBlockMatch) {
    const lines = metaBlockMatch.split('\n').filter((line) => line !== '---')
    let metaObject = {}
    lines.forEach((line) => {
      if (line === '---') {
        lines.splice(lines.indexOf(line), 1)
      }
      const [key, ...value] = line.split(':')
      if (key && value) {
        metaObject[key.trim()] = value.join(':').trim()
      }
    })
    return metaObject
  }

  removeMetaDataFromMarkdown(markdown) {
    const content = markdown

    try {
      if (!content || content.trim() === '') throw new Error('No content found in the document')

      // Get the YAML data from between the two lines of three dashes
      const regexPattern = /^---\n([\s\S]*?)\n---/m

      let metaBlockMatch = 'None found.'
      if (content.match(regexPattern)) {
        metaBlockMatch = content.match(regexPattern)[0]
      }

      if (metaBlockMatch === 'None found.')
        //   throw new Error("No metadata block found in the document");
        return content

      const newContent = content.replace(metaBlockMatch, '')

      return newContent
    } catch (err) {
      throw new Error('Error in removeMetaDataFromMarkdown: ' + err.message)
    }
  }

  /*
 		===================================================

  				Access Functions

   		===================================================
  */

  getMetaDataFromMarkdown(markdown) {
    const content = markdown

    if (!content || content.trim() === '') throw new Error('No content found in the document')

    // Get the YAML data from between the two lines of three dashes
    const regexPattern = /^---\n([\s\S]*?)\n---/m
    const metaBlockMatch =
      (content.match(regexPattern) && content.match(regexPattern)[0]) || 'None found.'

    if (metaBlockMatch === 'None found.') {
      const errorMessage = {
        message: 'No metadata block found in the document',
        content: content
      }
      console.warn(JSON.stringify(errorMessage))
      return
    }

    const metaObject = this.createMetaDataFromMetaBlock(metaBlockMatch)

    return metaObject
  }

  // New function to extract headers, links, and other elements
  extractElementsFromMarkdown(markdown) {
    const content = this.removeMetaDataFromMarkdown(markdown)
    const tokens = this.defaultMd.parse(content, {})

    const elements = {
      headers: [],
      links: [],
      lists: [],
      tables: []
    }

    let currentList = null

    tokens.forEach((token, index) => {
      // Extract headers
      if (token.type === 'heading_open') {
        const level = token.tag.replace('h', '') // h1, h2, h3, etc.
        const text = tokens[index + 1].content
        elements.headers.push({ level: parseInt(level), text })
      }

      // Extract links
      if (token.type === 'link_open') {
        const href = token.attrGet('href')
        const text = tokens[index + 1].content
        elements.links.push({ href, text })
      }

      // Extract lists (both ordered and unordered)
      if (token.type === 'bullet_list_open' || token.type === 'ordered_list_open') {
        currentList = []
      }
      if (token.type === 'list_item_open') {
        const listItem = tokens[index + 2].content
        currentList.push(listItem)
      }
      if (token.type === 'bullet_list_close' || token.type === 'ordered_list_close') {
        elements.lists.push(currentList)
        currentList = null
      }

      // Extract tables
      if (token.type === 'table_open') {
        let table = []
        for (let i = index; i < tokens.length; i++) {
          if (tokens[i].type === 'tr_open') {
            let row = []
            for (let j = i + 1; j < tokens.length; j++) {
              if (tokens[j].type === 'td_open' || tokens[j].type === 'th_open') {
                row.push(tokens[j + 1].content)
              }
              if (tokens[j].type === 'tr_close') {
                table.push(row)
                break
              }
            }
          }
          if (tokens[i].type === 'table_close') {
            elements.tables.push(table)
            break
          }
        }
      }
    })

    return elements
  }

  /*
 	===================================================

  		Markdown Conversion Functions

   	===================================================
  */

  // Function to convert markdown to HTML
  markdownToHTML(markdown) {
    if (!this.defaultMd) {
      throw new Error('MarkdownIt instance not initialized')
    }

    const content = this.removeMetaDataFromMarkdown(markdown)
    return this.defaultMd.render(content)
  }

  // Function to convert markdown to plain text
  markdownToText(markdown) {
    const content = this.removeMetaDataFromMarkdown(markdown)
    return content
  }
}

const markdownUtil = new MarkdownUtil()
export default markdownUtil
