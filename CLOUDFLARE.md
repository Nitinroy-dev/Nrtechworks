# Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
3. Build settings:
   - **Framework preset**: None
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty)

   > If you already created the project and see "Output directory 'dist' not found" / "No build command specified", open **Settings → Builds & deployments → Build configurations → Edit configuration** and set the values above, then retry the deployment.
4. Environment variables (Settings → Environment variables):
   - `NITRO_PRESET` = `cloudflare_pages`
   - `NODE_VERSION` = `20`
5. Save & Deploy.
6. Custom domain: Pages project → Custom domains → add your domain and follow the CNAME/nameserver instructions.

## Contact form (FormSubmit)
FormSubmit needs a one-time activation. After the first deploy:
1. Submit the form once on the live site.
2. Check `nitinroy.hireme@gmail.com` (and Spam) for an email from FormSubmit titled **"Confirm your email"** and click the activation link.
3. All future submissions will arrive in that inbox and redirect to `/thank-you`.