import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";
import QueryProvider from "./query-client";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
