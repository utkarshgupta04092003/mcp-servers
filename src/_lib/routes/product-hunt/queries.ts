export const PH_COLLECTION_QUERY = `query GetCollection($id: ID, $slug: String) {
                collection(id: $id, slug: $slug) {
                    id
                    name
                    description
                    coverImage
                    url
                    createdAt
                    featuredAt
                    followersCount
                    isFollowing
                    userId
                    user {
                        id
                        name
                        username
                        websiteUrl
                        }
                    }
                }`
export const PH_COLLECTIONS_QUERY = `query GetCollections(
                    $after: String
                    $before: String
                    $featured: Boolean
                    $first: Int
                    $last: Int
                    $order: CollectionsOrder
                    $postId: ID
                    $userId: ID
                    ) {
                    collections(
                        after: $after
                        before: $before
                        featured: $featured
                        first: $first
                        last: $last
                        order: $order
                        postId: $postId
                        userId: $userId
                    ) {
                        totalCount
                        pageInfo {
                            hasNextPage
                            hasPreviousPage
                            startCursor
                            endCursor
                        }
                        edges {
                        cursor
                            node {
                                id
                                name
                                description
                                featuredAt
                                createdAt
                                url
                                posts (first: 5){
                                  edges{
                                    cursor
                                    node{
                                      id
                                      name
                                      description
                                      url
                                    }
                                  }
                                }
                    
                            }
                        }
                        
                    }
                }
                `
// Order - NEWEST, FOLLOWERS_COUNT, FEATURED_AT

export const PH_POSTS_QUERY = `query GetPosts(
                  $after: String
                  $before: String
                  $featured: Boolean
                  $first: Int
                  $last: Int
                  $order: PostsOrder
                  $postedAfter: DateTime
                  $postedBefore: DateTime
                  $topic: String
                ) {
                  posts(
                    after: $after
                    before: $before
                    featured: $featured
                    first: $first
                    last: $last
                    order: $order
                    postedAfter: $postedAfter
                    postedBefore: $postedBefore
                    topic: $topic
                  ) {
                    totalCount
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                      startCursor
                      endCursor
                    }
                    edges {
                      cursor
                      node {
                        id
                        name
                        tagline
                        description
                        slug
                        url
                        createdAt
                        featuredAt
                        votesCount
                        commentsCount
                        website
                        thumbnail {
                          url
                          videoUrl
                        }
                        user {
                          id
                          twitterUsername
                        }
                        makers {
                          id
                          twitterUsername 
                        }
                      }
                    }
                  }
                }
                `
// FEATURED_AT, NEWEST, RANKING,VOTES
// DATE: An ISO-8601 encoded UTC date string.

export const PH_POST_QUERY = `query 
                  GetPost($id: ID, $slug: String) {
                    post(id: $id, slug: $slug) {
                      id
                      name
                      slug
                      tagline
                      description
                      createdAt
                      featuredAt
                      url
                      website
                      commentsCount
                      votesCount
                      reviewsCount
                      reviewsRating
                      isCollected
                      isVoted
                      userId
                      makers {
                        id
                      }
                      media {
                        url
                        type
                        videoUrl
                      }
                      thumbnail {
                        url
                        type
                      }
                      productLinks {
                        type
                        url
                      }
                    }
                  }
                `

export const PH_TOPICS_QUERY = `query GetTopics(
                  $after: String
                  $before: String
                  $first: Int
                  $followedByUserId: ID
                  $last: Int
                  $order: TopicsOrder
                  $query: String
                ) {
                  topics(
                    after: $after
                    before: $before
                    first: $first
                    followedByUserid: $followedByUserId
                    last: $last
                    order: $order
                    query: $query
                  ) {
                    totalCount
                    pageInfo {
                      hasNextPage
                      hasPreviousPage
                      startCursor
                      endCursor
                    }
                    edges {
                      cursor
                      node {
                        name
                        slug
                        description
                        url
                        followersCount 
                        postsCount 
                      }
                    }
                  }
                }
                `
