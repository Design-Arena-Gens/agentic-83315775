# Accessibility Checklist Implemented

- Keyboard focus management with visible `.focus-ring` outline
- Color contrast meets WCAG AA for text vs background
- Semantic HTML: headings, lists, `nav` with `aria-label`, `main`, `footer`
- Forms: explicit `<label>` for inputs, `aria-invalid`, `aria-describedby`, error text with `role=alert`
- Live regions: submit button uses `aria-busy` and page shows `role=status` on success
- Links and buttons have accessible names; decorative SVGs marked `aria-hidden`
- Responsive layout supports zoom and small screens; no content loss
- Table markup uses `<thead>`, `<tbody>`, and header cells for comparison table
