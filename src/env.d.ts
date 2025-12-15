/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PREACT_DEVTOOLS?: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}