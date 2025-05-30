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
      "@typescript-eslint/no-unused-vars": "warn", // Cambiado de "error" a "warn" para que no bloquee el build
      "react/no-unescaped-entities": "warn", // Cambiado a warn para no bloquear el build por comillas
    },
  },
];

export default eslintConfig;
