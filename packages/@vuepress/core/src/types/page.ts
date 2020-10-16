import type { MarkdownLink } from '@vuepress/markdown'
import type { BasePage, PageFrontmatter } from '@vuepress/shared'

/**
 * Vuepress Page
 */
export interface Page extends BasePage {
  /**
   * Path of the page that inferred from file path
   *
   * If the page does not come from a file, it would be `null`
   *
   * @example '/guide/index.html'
   */
  pathInferred: string | null

  /**
   * Locale path prefix of the page
   *
   * @example '/getting-started.html' -> '/'
   * @example '/en/getting-started.html' -> '/en/'
   * @example '/zh/getting-started.html' -> '/zh/'
   */
  pathLocale: string

  /**
   * Absolute path of the source file
   *
   * If the page does not come from a file, it would be `null`
   */
  filePath: string | null

  /**
   * Relative path of the source file
   *
   * If the page does not come from a file, it would be `null`
   */
  filePathRelative: string | null

  /**
   * Component file path
   */
  componentFilePath: string

  /**
   * Component relative file path
   */
  componentFilePathRelative: string

  /**
   * Component file content that generated from the source file
   */
  componentFileContent: string

  /**
   * Content of the page
   */
  content: string

  /**
   * Links of the page
   */
  links: MarkdownLink[]

  /**
   * Slug of the page
   */
  slug: string

  /**
   * Date of the page, in 'yyyy-MM-dd' format
   *
   * @example '2020-09-09'
   */
  date: string
}

/**
 * Options to create vuepress page
 */
export interface PageOptions {
  permalink?: string
  permalinkPattern?: string
  filePath?: string
  frontmatter?: PageFrontmatter
  content?: string
}