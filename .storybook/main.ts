import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
  
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // JSX/TSX 파일을 위한 babel-loader 명시적 추가
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
            require.resolve('@babel/preset-typescript'),
          ],
        },
      },
    });

    // 기존 CSS 규칙 찾아서 PostCSS 추가
    const rules = config.module.rules as any[];
    const cssRule = rules.find((rule) => {
      return rule && rule.test && rule.test.toString().includes('css');
    });

    if (cssRule && Array.isArray(cssRule.use)) {
      // PostCSS loader 추가
      cssRule.use.push({
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: {
              '@tailwindcss/postcss': {},
            },
          },
        },
      });
    }
    
    return config;
  },
};

export default config;
