# Starter Demo for Sveltekit and Sanity

This is a starter-kit / demo for using SvelteKit and Sanity.

It includes a basic setup to get posts, lists posts and show posts.
It also demonstrates how to display some extra information (the 'Facts' block) to your posts and how to fetch related posts.

This demo uses the default 'blog' setup for Sanity Studio.

Additional steps would include limiting the number of posts fetched and a search function, these can be easily added by anyone familiar with Sanity's querying language.

## Setting up

### Environment Variables

To secure your data, all connections to Sanity are saved in environment variables, during development you can use a `.env` for this. You need the following variables setup:

| Name                  | Description  |
| --------------------- | ------------ |
| VITE_SANITY_DATASET   | the dataset  |
| VITE_SANITY_PROJECTID | a project id |
| VITE_SANITY_TOKEN     | a token      |

(Note: this file should never be commited)

## Note

This codes uses an experimental home-brew to transform sanity portable text into html, while it works with simple things, it's not yet tested with more complicated constructs.
