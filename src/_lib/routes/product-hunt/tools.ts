import { McpServer } from '@modelcontextprotocol/sdk/server/mcp'
import z from 'zod'
import {
    getCollectionInfo,
    getParticularCollectionInfo,
    getParticularPostInfo,
    getPostsInfo,
    getTopicInfo,
} from './fetchers'

export const initializeTool = (server: McpServer) => {
    server.registerTool(
        'getCollectionInfo',
        {
            description: `Retrieves detailed information about a specific collection (a group of posts created by a user) from Product Hunt. Useful for exploring trending discussions, categories, and curated product groupings.`,
            inputSchema: {
                after: z
                    .string()
                    .optional()
                    .describe(
                        'Pagination cursor for fetching the next set of collections. Returns results that come after the given cursor.'
                    ),
                before: z
                    .string()
                    .optional()
                    .describe(
                        'Pagination cursor for fetching the previous set of collections. Returns results that come before the given cursor.'
                    ),
                featured: z
                    .boolean()
                    .optional()
                    .default(true)
                    .describe(
                        'If true, only featured collections are returned. Set to false to include all collections.'
                    ),
                first: z
                    .number()
                    .optional()
                    .default(5)
                    .describe(
                        'Specifies the maximum number of collections to return starting forward from the cursor (or from the beginning if no cursor is provided).'
                    ),
                last: z
                    .number()
                    .optional()
                    .describe(
                        'Specifies the maximum number of collections to return starting backward from the cursor (or from the end if no cursor is provided).'
                    ),
                order: z
                    .enum(['FEATURED_AT', 'FOLLOWERS_COUNT', 'NEWEST'])
                    .optional()
                    .describe(
                        'Defines the sorting order of collections: FEATURED_AT (by date featured), FOLLOWERS_COUNT (by popularity), or NEWEST (most recent).'
                    ),
                postId: z
                    .string()
                    .optional()
                    .describe(
                        'Filters collections that include a specific post, identified by its post ID.'
                    ),
                userId: z
                    .string()
                    .optional()
                    .describe(
                        'Filters collections created by a specific user, identified by their user ID.'
                    ),
            },
        },
        getCollectionInfo
    )
    server.registerTool(
        'getParticularCollectionInfo',
        {
            description: `Retrieves detailed information about a specific Product Hunt collection. A collection is a curated group of posts created by a user. This tool is useful for exploring curated product lists, trending topics, or themed groupings of posts. If you have the collection’s slug (the URL-friendly name of the collection), prefer using that. Otherwise, use the collection ID.`,

            inputSchema: {
                collectionId: z
                    .string()
                    .optional()
                    .describe(
                        `Unique identifier (ID) of the collection. Use this when you know the exact collection ID and want to fetch its details.`
                    ),

                slug: z
                    .string()
                    .optional()
                    .describe(
                        `The URL-friendly slug of the collection. This is the text part used in the collection’s public URL (e.g., for https://www.producthunt.com/collections/my-favorite-tools, the slug is "my-favorite-tools"). Use this when you don’t have the collection ID but know the slug.`
                    ),
            },
        },
        getParticularCollectionInfo
    )
    server.registerTool(
        'getPostsInfo',
        {
            description: `Retrieves a list of Product Hunt posts. Use this tool when you want to browse multiple products, explore trending or featured posts, or filter posts by time, order, or popularity. This is suitable for general searches and discovery, not for fetching detailed information about a single known post.`,
            inputSchema: {
                after: z
                    .string()
                    .optional()
                    .describe(
                        'A cursor for forward pagination. Returns posts that come after this cursor. Useful for loading the next page of results.'
                    ),
                before: z
                    .string()
                    .optional()
                    .describe(
                        'A cursor for backward pagination. Returns posts that come before this cursor. Useful for loading the previous page of results.'
                    ),
                featured: z
                    .boolean()
                    .optional()
                    .default(true)
                    .describe(
                        'If true, only returns featured posts. If false, includes all posts regardless of featured status.'
                    ),
                first: z
                    .number()
                    .optional()
                    .default(5)
                    .describe(
                        'Maximum number of posts to return starting forward from the cursor (or from the beginning if no cursor is provided).'
                    ),
                last: z
                    .number()
                    .optional()
                    .describe(
                        'Maximum number of posts to return starting backward from the cursor (or from the end if no cursor is provided).'
                    ),
                order: z
                    .enum(['FEATURED_AT', 'NEWEST', 'RANKING', 'VOTES'])
                    .optional()
                    .describe(
                        'Determines the order of posts. "FEATURED_AT" sorts by featured date, "NEWEST" by recent posts, "RANKING" by product ranking, "VOTES" by number of votes.'
                    ),
                postedAfter: z
                    .string()
                    .optional()
                    .describe(
                        'Filters posts to only include those published after the specified date or post ID.'
                    ),
                postedBefore: z
                    .string()
                    .optional()
                    .describe(
                        'Filters posts to only include those published before the specified date or post ID.'
                    ),
            },
        },
        getPostsInfo
    )
    server.registerTool(
        'getParticularPostInfo',
        {
            description: `Retrieves detailed information about a single, specific Product Hunt post. Use this tool when you know the exact post you want to fetch, either by its ID or URL-friendly slug. It provides all details about that post, including creator, launch information, topics, media, and popularity. Do NOT use this tool to browse multiple posts—use getPostsInfo for that purpose.`,
            inputSchema: {
                postId: z
                    .string()
                    .optional()
                    .describe(
                        'Unique identifier (ID) of the post. Use this when you know the exact post ID and want to fetch its full details.'
                    ),
                slug: z
                    .string()
                    .optional()
                    .describe(
                        'The URL-friendly slug of the post (the text part used in the public URL, e.g., "awesome-app"). Use this if you don’t have the post ID.'
                    ),
            },
        },
        getParticularPostInfo
    )
    server.registerTool(
        'getTopicInfo',
        {
            description: `Retrieves detailed information about a specific topic(a group of post created by product hunt) from Product Hunt. Useful for exploring trending discussions, categories, and product groupings on Product Hunt.`,
            inputSchema: {
                after: z
                    .string()
                    .optional()
                    .describe(
                        'A cursor for forward pagination. Returns results that come after the given cursor.'
                    ),
                before: z
                    .string()
                    .optional()
                    .describe(
                        'A cursor for backward pagination. Returns results that come before the given cursor.'
                    ),
                first: z
                    .number()
                    .optional()
                    .default(5)
                    .describe(
                        'Limits the number of results to return starting forward from the cursor (or beginning if no cursor is provided).'
                    ),
                last: z
                    .number()
                    .optional()
                    .describe(
                        'Limits the number of results to return starting backward from the cursor (or end if no cursor is provided).'
                    ),
                order: z.enum(['FOLLOWERS_COUNT', 'NEWEST']).optional(),
                followedByUserId: z
                    .string()
                    .optional()
                    .describe(
                        'Filters topics by those followed by a specific user (given their User ID).'
                    ),
                query: z
                    .string()
                    .optional()
                    .describe('A search string to filter topics by name, slug, or description.'),
            },
        },
        getTopicInfo
    )
}
