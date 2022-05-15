// Some base options that will apply to all themes
export const base = {
    breakpoints: ['768px'],
    space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
    sizes: {
      body: '800px',
    },
    fonts: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
    },
    fontSizes: [
      '12px',
      '14px',
      '16px',
      '20px',
      '24px',
      '36px',
      '48px',
      '60px',
      '80px',
      '96px',
    ],
    fontWeights: {
      heading: 700,
      mid: 600,
      body: 400,
    },
    lineHeights: {
      heading: 1.2,
      body: 1.4,
    },
    radii: ['2px', '4px', '8px'],
  }
  
  // grey theme colours
  export const grey = {
    primary: "#2f3c48",
    secondary: "#6f7f8c",
    success: "#3e4d59",
    danger: "#cc330d",
    info: "#5c8f94",
    warning: "#6e9fa5",
    light: "#eceeec",
    dark: "#1e2b37"
  }
  
  // Dark theme colours
  export const dark = {
    primary: '#4851f4',
    background: '#1f2023',
    nav: '#27282b',
    border: '#303236',
    text: '#f8f8f8',
    grey: '#aaaaaa',
    error: '#ff3333',
  }
  
  // Solarized light theme colours
  export const solarizedLight = {
    primary: '#4851f4',
    background: '#fdf6e3',
    nav: '#eee8d5',
    border: '#eee8d5',
    text: '#002b36',
    grey: '#586e75',
    error: '#dc322f',
  }
  
  // Solarized dark theme colours
  export const solarizedDark = {
    primary: '#4851f4',
    background: '#002b36',
    nav: '#073642',
    border: '#073642',
    text: '#839496',
    grey: '#586e75',
    error: '#dc322f',
  }