import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      // Allow HTML links for pages (can use <a> instead of <Link> in some cases)
      "@next/next/no-html-link-for-pages": "warn",
      // Allow using <img> instead of <Image /> (warning only)
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
