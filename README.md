# Starter Demo for Sveltekit and Sanity

This is a starter-kit / demo for using SvelteKit and Sanity.

It includes a basic setup to get posts, lists posts and show posts.
It also demonstrates how to display some extra information (the 'Facts' block) to your posts and how to fetch related posts.

Additional steps would include limiting the number of posts fetched and a search function, these can be easily added by anyone familiar with Sanity's querying language.

## Setting up

### Environment Variables

To secure your data, all connections to Sanity are saved in environment variables, during development you can use a `.env` for this. You need the following variables setup:

| Name | Description |
| ---- | ----------- |

(Note: this file should never be commited)

## Note

Since [@movingbrands/svelte-portable-text](https://github.com/movingbrands/svelte-portable-text) seems to be no longer under development it uses a fork: [@camilleri13/svelte-portable-text](https://github.com/jcamilleri13/svelte-portable-text)
