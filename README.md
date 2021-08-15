# Starter Demo for Sveltekit and Sanity

This is a starter-kit / demo for using SvelteKit and Sanity.

It includes a basic setup to get posts, lists posts and show posts.
It also demonstrates how to display some extra information (the 'Facts' block) to your posts and how to fetch related posts.

This demo uses the default 'blog' setup for Sanity Studio.

Additional steps would include limiting the number of posts fetched and a search function, these can be easily added by anyone familiar with Sanity's querying language.

## Setting up

### Environment Variables

To secure your data, all connections to Sanity are saved in environment variables, during development you can use a `.env` for this. You need the following variables setup:

| Name | Description |
| ---- | ----------- |

(Note: this file should never be commited)

## Note

This codes uses [@movingbrands/svelte-portable-text](https://github.com/movingbrands/svelte-portable-text), which seems to be completely dead and has some severe issues to get to work with SvelteKit due to CommonJS and other stuff I am not qualified to explain. It is important to add the following experimental flag to node while trying to build:

```
NODE_OPTIONS = "--experimental-modules --experimental-specifier-resolution=node"
```

This can be done in the `.env` file or anyhow you want to do this.
