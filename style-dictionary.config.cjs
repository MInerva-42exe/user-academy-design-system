const StyleDictionary = require('style-dictionary');

// turn boxShadow objects into CSS strings
StyleDictionary.registerTransform({
  name: 'shadow/css',
  type: 'value',
  matcher: (t) => t.$type === 'boxShadow' || t.type === 'boxShadow',
  transformer: (t) => {
    const v = t.$value || t.value;
    const toCss = (s) => `${s.x} ${s.y} ${s.blur} ${s.spread} ${s.color}`;
    return Array.isArray(v) ? v.map(toCss).join(', ') : toCss(v);
  },
});

module.exports = {
  // your tokens
  source: ['tokens/meua.tokens.json'],

  // prefix all var names with --meua-
  prefix: 'meua',

  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/css',
        'size/px',
        'shadow/css'
      ],
      buildPath: 'src/theme/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        // emit primitives only; skip composed patterns
        filter: (t) => [
          'color','dimension','fontFamilies','fontSizes',
          'lineHeights','letterSpacing','fontWeights','boxShadow'
        ].includes(t.$type)
      }]
    }
  }
};
