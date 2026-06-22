Production notes and artist assets

This repository now contains the artist website for BUKE.

Changes included in this commit:
- Added full artist biography to the About section and included a contact email.
- Updated gallery and about photo markup to use responsive picture/webp fallbacks.
- Updated Open Graph to point at assets/photo-1.jpg (replace with optimized image after upload).

Images

Please upload the original high-resolution images named exactly:
- assets/photo-1.jpg  (artist portrait)
- assets/photo-2.jpg  (logo/artwork)

I will create optimized variants (1600/800/400 and WebP) automatically once the originals are present. Alternatively, if you prefer I can upload optimized copies directly from the images you attached in chat — confirm and I will add them.

Deployment

A GitHub Actions workflow is present at .github/workflows/deploy.yml which will publish the repository root to the gh-pages branch on push to main. To publish the site:
1. In repository Settings -> Pages, set Source to gh-pages branch / (root)
2. Wait a minute for the site to become available at:
   https://ddibamusege123.github.io/Buke/

If you want me to run the optimization and upload the image files now, reply "Upload images now" and I will proceed to add optimized variants and push them.
