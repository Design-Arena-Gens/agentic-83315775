# Lighthouse (target >= 90 desktop)

Run Lighthouse in Chrome DevTools against production build.

Expected results (typical on modern hardware):
- Performance: 95-100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Notes:
- Images served from Unsplash may affect performance; Next Image optimizes.
- Ensure production build (`next build && next start`) for accurate scores.
