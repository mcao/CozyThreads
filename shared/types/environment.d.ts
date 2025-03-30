declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_API_SERVER_HOST: string;
      VITE_API_SERVER_PORT: string;
      VITE_STRIPE_PUBLIC_KEY: string;
      CLIENT_HOST: string;
      CLIENT_PORT: string;
      STRIPE_SECRET_KEY: string;
    }
  }
}

export {};
