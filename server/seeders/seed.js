const db = require("../config/connection");
const { Story, User } = require("../models");
const userSeeds = require('./userSeeds.json');
const storySeeds = require('./storySeeds.json');


db.once('open', async () => {
    try {
        await Story.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < storySeeds.length; i++) {
            const { _id, storyAuthor } = await Story.create(storySeeds[i]);
            const user = await User.findOneAndUpdate(
              { username: storyAuthor },
              {
                $addToSet: {
                  stories: _id,
                },
              }
            );
        }

    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done');
    process.exit(0);
})