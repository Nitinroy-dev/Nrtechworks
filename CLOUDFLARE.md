# Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
3. Build settings:
   - **Framework preset**: None
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty)

   If Cloudflare still skips the build, the repo includes a committed `cloudflare-dist/` fallback and `wrangler.toml` points to it, so the deployment will still have files to upload.
4. Environment variables (recommended for full framework builds):
   - `NITRO_PRESET` = `cloudflare_pages`
   - `NODE_VERSION` = `20`
5. Save & Deploy.
6. Custom domain: Pages project → Custom domains → add your domain and follow the CNAME/nameserver instructions.

## If deployment still says "No build command specified"

Cloudflare does not read build commands from `wrangler.toml`, and it may cache the Pages build configuration created during the first failed deploy. Fix it once in the dashboard:

1. Pages project → **Settings** → **Builds & deployments** → **Build configurations** → **Edit configuration**.
2. Set **Build command** to `npm install && npm run build`.
3. Set **Build output directory** to `dist` for normal builds, or `cloudflare-dist` if you want to deploy the committed fallback without building.
4. Save, then go to **Deployments** → **Retry deployment**.

## Contact form (FormSubmit)
FormSubmit needs a one-time activation. After the first deploy:
1. Submit the form once on the live site.
2. Check `nitinroy.hireme@gmail.com` (and Spam) for an email from FormSubmit titled **"Confirm your email"** and click the activation link.
3. All future submissions will arrive in that inbox and redirect to `/thank-you`.