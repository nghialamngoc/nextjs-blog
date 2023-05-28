const { breakpoints } = require('./common.config')

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-mixins': {
      mixins: {
        media: (mixin, breakpoint) => {
          const bp = breakpoints[breakpoint]

          if (bp) {
            return {
              ['@media screen and (min-width: ' + bp + ')']: {
                '@mixin-content': {},
              },
            }
          }

          return {}
        },
      },
    },
    'postcss-each': {},
  },
}
