# Mohammad Ibrahim — Portfolio

A responsive, static portfolio built with React, TypeScript, and Vite. Personal profile details and project content are centralized in `src/data/profile.ts`.

## Local development

Requires Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The build output is written to `dist/`.

## GitHub Pages deployment

The included GitHub Actions workflow deploys on pushes to `main`. It assumes a **user-site repository** named `YOUR-GITHUB-USERNAME.github.io`, for which Vite's base path is `/`. No Git remote was configured when this project was prepared, so replace that repository name with the account's verified username before publishing. If using a project repository instead, update `base` in `vite.config.ts` to `'/REPOSITORY-NAME/'`.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then push to `main`.

## Profile details to configure

Edit `src/data/profile.ts` and add verified GitHub, LinkedIn, and email values. These are intentionally blank and their links are hidden until configured. Add a real resume PDF at `public/resume/Mohammad-Ibrahim-Resume.pdf`, then set `resume` to `/resume/Mohammad-Ibrahim-Resume.pdf`. The résumé action remains hidden until then. The page currently has no canonical URL because the final site URL is not confirmed.

Project descriptions use only supplied context. Repository and demo links are omitted because verified public URLs were not provided. The face-authentication entry is described as exploration/prototyping, not as a deployed or validated system.
