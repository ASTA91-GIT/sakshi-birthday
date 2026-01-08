import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import MusicPlayer from "./components/MusicPlayer";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import MemoriesPage from "./pages/MemoriesPage";
import SpecialPage from "./pages/SpecialPage";
import SurprisePage from "./pages/SurprisePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <MusicPlayer />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/special" element={<SpecialPage />} />
            <Route path="/surprise" element={<SurprisePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
