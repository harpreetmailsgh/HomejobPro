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
import HomeJobsGuide from "./pages/home-jobs-guide";
import DrippingFaucetGuide from "./pages/dripping-faucet-guide";
import CloggedDrainGuide from "./pages/clogged-drain-guide";
import RunningToiletGuide from "./pages/running-toilet-guide";
import LowWaterPressureGuide from "./pages/low-water-pressure-guide";
import NoHotWaterGuide from "./pages/no-hot-water-guide";
import FrozenPipesGuide from "./pages/frozen-pipes-guide";
import CircuitBreakerGuide from "./pages/circuit-breaker-guide";
import FlickeringLightsGuide from "./pages/flickering-lights-guide";
import OutletNotWorkingGuide from "./pages/outlet-not-working-guide";
import HotBuzzingOutletGuide from "./pages/hot-buzzing-outlet-guide";
import LightSwitchNotWorkingGuide from "./pages/light-switch-not-working-guide";
import PowerSurgeProtectionGuide from "./pages/power-surge-protection-guide";
import ACNotCoolingGuide from "./pages/ac-not-cooling-guide";
import FurnaceNotTurningOnGuide from "./pages/furnace-not-turning-on-guide";
import UnevenTemperatureGuide from "./pages/uneven-temperature-guide";
import HVACNoiseGuide from "./pages/hvac-noise-guide";
import NotFound from "./pages/not-found";
import { lazy } from "react";

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
      <Route path="/home-jobs-guide" component={HomeJobsGuide} />
      <Route path="/dripping-faucet-guide" component={DrippingFaucetGuide} />
      <Route path="/clogged-drain-guide" component={CloggedDrainGuide} />
      <Route path="/running-toilet-guide" component={RunningToiletGuide} />
      <Route path="/low-water-pressure-guide" component={LowWaterPressureGuide} />
      <Route path="/no-hot-water-guide" component={NoHotWaterGuide} />
      <Route path="/frozen-pipes-guide" component={FrozenPipesGuide} />
      <Route path="/circuit-breaker-guide" component={CircuitBreakerGuide} />
      <Route path="/flickering-lights-guide" component={FlickeringLightsGuide} />
      <Route path="/outlet-not-working-guide" component={OutletNotWorkingGuide} />
      <Route path="/hot-buzzing-outlet-guide" component={HotBuzzingOutletGuide} />
      <Route path="/light-switch-not-working-guide" component={LightSwitchNotWorkingGuide} />
      <Route path="/power-surge-protection-guide" component={PowerSurgeProtectionGuide} />
      <Route path="/ac-not-cooling-guide" component={ACNotCoolingGuide} />
      <Route path="/furnace-not-turning-on-guide" component={FurnaceNotTurningOnGuide} />
      <Route path="/uneven-temperature-guide" component={UnevenTemperatureGuide} />
      <Route path="/hvac-noise-guide" component={HVACNoiseGuide} />
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