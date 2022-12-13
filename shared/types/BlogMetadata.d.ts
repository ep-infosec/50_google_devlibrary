/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * BlogMetadata
 */
export interface BlogMetadata {
  /**
   * Internal schema version
   */
  version?: number;
  /**
   * 'medium' or 'other'
   */
  source?: string;
  /**
   * The Dev Library ID of the author(s)
   */
  authorIds?: string[];
  /**
   * The name of the human author
   */
  author: string;
  /**
   * The title of the blog post
   */
  title: string;
  /**
   * Full external link to the post
   */
  link: string;
  /**
   * Array of product-specific string tags
   */
  tags: [string, ...string[]];
  /**
   * The expertise of the articles or projects
   */
  expertise: string;
  [k: string]: unknown;
}