import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({
    stories,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    console.log(stories)
    if (!stories.length) {
        return <h3>No Stories Yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {stories && 
                stories.map( (story) => (
                    <div key={story._id} className="card mb-3">
                        <h4 className="card-header bg-primary text-light p-2 m-0">
                            {showUsername ? (
                                <Link
                                    className="text-light"
                                    to={`/profiles/${story.storyAuthor}`}
                                >
                                    {story.storyAuthor} <br />
                                    <span style={{ fontSize: '1rem' }}>
                                        posted this story on {story.createdAt}
                                    </span>
                                </Link>
                            ):(
                                <>
                                    <span style={{ fontSize: '1rem' }}>
                                        You posted this story on {story.createdAt}
                                    </span>
                                </>
                            )}
                        </h4>
                        <div className="card-body bg-light p-2">
                            <p>{story.storyText}</p>
                        </div>
                        <Link
                            className="btn btn-primary btn-block btn-squared"
                            to={`/stories/${story._id}`}
                        >
                            Join the discussion on this story.
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default StoryList;