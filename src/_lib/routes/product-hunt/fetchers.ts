import axios from 'axios'
import { kebabCase } from 'lodash'
import {
    PH_COLLECTION_QUERY,
    PH_COLLECTIONS_QUERY,
    PH_POST_QUERY,
    PH_POSTS_QUERY,
    PH_TOPICS_QUERY,
} from './queries'

export const getTopicInfo = async ({
    after,
    before,
    first,
    last,
    order,
    followedByUserId,
    query,
}: {
    after?: string
    before?: string
    first?: number
    last?: number
    order?: string
    followedByUserId?: string
    query?: string
}) => {
    try {
        checkPHEnv()
        const variables = {
            after,
            before,
            first,
            last,
            order,
            followedByUserId,
            query: kebabCase(query),
        }
        const graphQuery = { query: PH_TOPICS_QUERY, variables: JSON.stringify(variables) }
        const data = await getPHResponse(graphQuery)
        return {
            content: [{ type: 'text' as const, text: JSON.stringify(data) }],
        }
    } catch (error) {
        return {
            content: [
                {
                    type: 'text' as const,
                    text: `Error: ${error}`,
                },
            ],
            isError: true,
        }
    }
}

export const getCollectionInfo = async ({
    after,
    before,
    featured,
    first,
    last,
    order,
    postId,
    userId,
}: {
    after?: string
    before?: string
    featured?: boolean
    first?: number
    last?: number
    order?: string
    postId?: string
    userId?: string
}) => {
    try {
        checkPHEnv()
        const variables = {
            after,
            before,
            featured,
            first,
            last,
            order,
            postId,
            userId,
        }
        const graphQuery = { query: PH_COLLECTIONS_QUERY, variables: JSON.stringify(variables) }
        const data = await getPHResponse(graphQuery)
        return {
            content: [{ type: 'text' as const, text: JSON.stringify(data) }],
        }
    } catch (error) {
        return {
            content: [
                {
                    type: 'text' as const,
                    text: `Error: ${error}`,
                },
            ],
            isError: true,
        }
    }
}

export const getParticularCollectionInfo = async ({
    collectionId,
    slug,
}: {
    collectionId?: string
    slug?: string
}) => {
    try {
        checkPHEnv()
        const variables = {
            id: collectionId,
            slug,
        }
        const graphQuery = { query: PH_COLLECTION_QUERY, variables: JSON.stringify(variables) }
        const data = await getPHResponse(graphQuery)
        return {
            content: [{ type: 'text' as const, text: JSON.stringify(data) }],
        }
    } catch (error) {
        return {
            content: [
                {
                    type: 'text' as const,
                    text: `Error: ${error}`,
                },
            ],
            isError: true,
        }
    }
}

export const getPostsInfo = async ({
    after,
    before,
    featured,
    first,
    last,
    order,
    postedAfter,
    postedBefore,
}: {
    after?: string
    before?: string
    featured?: boolean
    first?: number
    last?: number
    order?: string
    postedAfter?: string
    postedBefore?: string
}) => {
    try {
        checkPHEnv()
        const variables = {
            after,
            before,
            featured,
            first,
            last,
            order,
            postedAfter,
            postedBefore,
        }
        const graphQuery = { query: PH_POSTS_QUERY, variables: JSON.stringify(variables) }
        const data = await getPHResponse(graphQuery)
        return {
            content: [{ type: 'text' as const, text: JSON.stringify(data) }],
        }
    } catch (error) {
        return {
            content: [
                {
                    type: 'text' as const,
                    text: `Error: ${error}`,
                },
            ],
            isError: true,
        }
    }
}

export const getParticularPostInfo = async ({
    postId,
    slug,
}: {
    postId?: string
    slug?: string
}) => {
    try {
        checkPHEnv()
        const variables = {
            id: postId,
            slug,
        }
        const graphQuery = { query: PH_POST_QUERY, variables: JSON.stringify(variables) }
        const data = await getPHResponse(graphQuery)
        return {
            content: [{ type: 'text' as const, text: JSON.stringify(data) }],
        }
    } catch (error) {
        return {
            content: [
                {
                    type: 'text' as const,
                    text: `Error: ${error}`,
                },
            ],
            isError: true,
        }
    }
}

const checkPHEnv = () => {
    if (!process.env.PH_BEARER_TOKEN) {
        throw new Error('PH_BEARER_TOKEN is not set')
    }
}

const getPHResponse = async (graphQLQuery: { query: string; variables: string }) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.producthunt.com/v2/api/graphql',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.PH_BEARER_TOKEN}`,
        },
        data: graphQLQuery,
    }
    const response = await axios.request(config)
    return response.data
}
