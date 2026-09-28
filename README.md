# Welcome, Baby Vihaan

An animated, mobile-friendly invitation designed for sharing through WhatsApp.

## Set the party details

Open `script.js` and fill in the `PARTY` object at the top. Add the date, time, venue, address, Google Maps share URL, and RSVP WhatsApp number. Empty fields display “to be announced”; the directions and RSVP buttons appear only when their links are set.

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository, and deploy. This is a static site: Framework Preset **Other**, no build command, and the root directory is this folder.
3. Open the deployment URL on your phone and use **Share invitation** to send it on WhatsApp.

For WhatsApp's link preview, set `og:image` in `index.html` to the full public URL of the image after deployment (for example, `https://your-domain.vercel.app/assets/moon-elephant.png`), then redeploy. WhatsApp may cache old previews.

No data is collected by the site. RSVP opens WhatsApp on the guest's device.
