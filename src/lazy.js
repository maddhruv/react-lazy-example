import { lazy } from "react";

export const lazyWithRetryAndPrefetching = (componentImport) => {
  const factory = async () => {
    try {
      return await componentImport();
    } catch (error) {
      console.error(error);
      return window.location.reload();
    }
  };

  const Component = lazy(factory);

  Component.prefetch = factory;

  return Component;
};
