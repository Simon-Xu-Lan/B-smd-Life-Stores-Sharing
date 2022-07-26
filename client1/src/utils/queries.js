import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            stories {
                _id
                storyText
                createdAt
            }
        }
    }
`;

export const QUERY_STORIES = gql`
    query getStories {
        stories {
            _id
            storyText
            storyAuthor
            createdAt
        }
    }
`;

export const QUERY_SINGLE_STORY = gql`
    query getSingleStory($storyId: ID!) {
        story(storyId: $storyId) {
            _id
            storyText
            storyAuthor
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            stories {
                _id
                storyText
                storyAuthor
                createdAt
            }
        }
    }
`;
