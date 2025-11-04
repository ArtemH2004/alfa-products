"use client";
import { useState, useEffect } from "react";
import { StoreApi, UseBoundStore } from "zustand";

type PersistStore = UseBoundStore<StoreApi<any>> & {
  persist: {
    hasHydrated: () => boolean;
    onFinishHydration: (fn: (state: any) => void) => () => void;
    rehydrate: () => void;
  };
};

export const useZustandHydration = <T extends PersistStore>(store: T) => {
  const [hydrationComplete, setHydrationComplete] = useState(false);

  useEffect(() => {
    if (store.persist.hasHydrated()) {
      setHydrationComplete(true);
      return;
    }

    const unsubscribe = store.persist.onFinishHydration(() => {
      setHydrationComplete(true);
    });

    store.persist.rehydrate();

    return () => {
      unsubscribe();
    };
  }, [store]);

  return hydrationComplete;
};
