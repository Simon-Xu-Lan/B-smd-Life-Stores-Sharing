import React from 'react';
import { useQuery } from '@apollo/client';

import StoryList from '../components/StoryList';
import StoryForm from '../components/StoryForm';

import { QUERY_STORIES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_STORIES);

    const stories = data?.stories || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <StoryForm />
          </div>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <StoryList
                stories={stories}
                title="Some Feed for Story(s)..."
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;