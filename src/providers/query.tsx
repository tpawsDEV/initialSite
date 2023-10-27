"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ProvidesTheQueryClientProps {
  children: React.ReactNode;
}

export function NextQueryClientProvider({
  children,
}: ProvidesTheQueryClientProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
