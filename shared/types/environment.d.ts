declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_SERVER_HOST: string;
      VITE_SERVER_PORT: string;
    }
  }
}

export {};
