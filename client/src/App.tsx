import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/home";
import Search from "./pages/search";
import Settings from "./pages/settings";
import FAQ from "./pages/faq";
import About from "./pages/about";
import ListBusiness from "./pages/list-business";
import ThankYou from "./pages/thank-you";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/settings" component={Settings} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/list-business" component={ListBusiness} />
      <Route path="/list-business/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
