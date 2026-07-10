# Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
3. Build settings:
   - **Framework preset**: None
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty)

   This repo also includes the same build command in `wrangler.toml`, so Cloudflare can read it automatically.
4. Environment variables are already included in `wrangler.toml`:
   - `NITRO_PRESET` = `cloudflare_pages`
   - `NODE_VERSION` = `20`
5. Save & Deploy.
6. Custom domain: Pages project → Custom domains → add your domain and follow the CNAME/nameserver instructions.

## If deployment still says "No build command specified"

Cloudflare may cache the Pages build configuration created during the first failed deploy. Fix it once in the dashboard:

1. Pages project → **Settings** → **Builds & deployments** → **Build configurations** → **Edit configuration**.
2. Set **Build command** to `npm install && npm run build`.
3. Set **Build output directory** to `dist`.
4. Save, then go to **Deployments** → **Retry deployment**.

## Contact form (FormSubmit)
FormSubmit needs a one-time activation. After the first deploy:
1. Submit the form once on the live site.
2. Check `nitinroy.hireme@gmail.com` (and Spam) for an email from FormSubmit titled **"Confirm your email"** and click the activation link.
3. All future submissions will arrive in that inbox and redirect to `/thank-you`.