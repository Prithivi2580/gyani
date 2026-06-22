import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";
import QueryProvider from "./query-client";
import NuqsProvider from "./nuqs-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryProvider>
          <NuqsProvider>{children}</NuqsProvider>
        </QueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
