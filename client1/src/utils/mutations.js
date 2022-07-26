import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_STORY = gql`
    mutation addStory($storyText: String!) {
        addStory(storyText: $storyText) {
            _id
            storyText
            storyAuthor
            createdAt
            comments {
                _id
                commentText
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($storyId: ID!, $commentText: String!) {
        addComment(storyId: $storyId, commentText: $commentText) {
            _id
            storyText
            storyAuthor
            createdAt
            comments {
                _id
                commentText
                createdAt
            }
        }
    }
`;