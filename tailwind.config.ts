import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        carbon: '#101b1a',
        raised: '#192622',
        soft: '#253730',
        ivory: '#f4f1e8',
        paper: '#fbfaf5',
        lime: '#d8ef59',
        muted: '#415349',
        'muted-inverse': '#c2d0c8',
        line: '#c8cbbf',
        'line-dark': '#43564d',
        panel: '#e8e9df'
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'Trebuchet MS', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif']
      },
      maxWidth: { content: '1280px' },
      boxShadow: { panel: '0 24px 80px rgba(16, 27, 26, 0.16)' }
    }
  },
  plugins: []
} satisfies Config;
