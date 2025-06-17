import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable the rule      
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      "@typescript-eslint/no-explicit-any": "off", // Disable the rule globally
      "@typescript-eslint/no-unsafe-function-type": "off",
          // Disable img element warnings
    '@next/next/no-img-element': 'off',
    
    // Disable missing alt text warnings
    'jsx-a11y/alt-text': 'off',
    
    // Disable exhaustive deps warnings
    'react-hooks/exhaustive-deps': 'off'

    },
  },
];

export default eslintConfig;
