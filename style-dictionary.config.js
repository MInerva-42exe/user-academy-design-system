export default {
  source: ['tokens/meua.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/theme/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root' },
          filter: (t) =>
            ['color','dimension','fontFamilies','fontSizes','lineHeights','letterSpacing','fontWeights'].includes(t.$type)
        }
      ]
    }
  }
};
