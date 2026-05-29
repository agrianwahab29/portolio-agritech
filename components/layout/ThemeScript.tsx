// Inline script to set theme before first paint (prevents flash of wrong theme).
// Reads localStorage, falls back to system preference, defaults to dark.
export function ThemeScript() {
  const script = `
(function() {
  try {
    var stored = localStorage.getItem('agriantech-theme');
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
