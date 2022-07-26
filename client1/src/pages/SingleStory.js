import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_STORY } from '../utils/queries';

const SingleStory = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { storyId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_STORY, {
    // pass URL parameter
    variables: { storyId: storyId },
  });

  const story = data?.story || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {story.storyAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          posted this story on {story.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {story.storyText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={story.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm storyId={storyId} />
      </div>
    </div>
  );
};

export default SingleStory;