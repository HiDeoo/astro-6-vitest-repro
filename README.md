# astro-6-vitest-repro

## Steps to reproduce

1. Clone this repository
1. Switch to the `hd/projects` branch
1. Run `pnpm install`
1. Run `pnpm test`

## Notes

- Editing the `vitest.config.ts` file and using `defineConfig()` from `vitest/config` to define the Vitest configuration works as expected.
- Only relying on `getViteConfig()` from `astro/config` causes the issue.
