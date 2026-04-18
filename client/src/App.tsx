import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { LanguageProvider } from "@/lib/i18n";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import NeoVeloParts from "@/pages/neovelo-parts";
import Global from "@/pages/global";
import SabanciDx from "@/pages/sabancidx";
import NotFound from "@/pages/not-found";

// Disable browser scroll restoration immediately at module load time
if (typeof window !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function scrollInstantToTop() {
  // Temporarily disable any CSS smooth scroll, force instant jump to top
  const html = document.documentElement;
  const prev = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = prev;
}

function HashScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      scrollInstantToTop();
      return;
    }

    const scrollToHash = () => {
      const targetId = hash.slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      const offset = 120;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timeoutId = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <HashScrollManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/neovelo-parts" component={NeoVeloParts} />
        <Route path="/global" component={Global} />
        <Route path="/sabancidx" component={SabanciDx} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
