import { Box } from "@mui/material";

import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Start from "./sections/Start";
import Guides from "./sections/Guides";
import Impressions from "./sections/Impressions";

export default function App() {

  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* Hero Section */}
        <Hero />
        {/* Info Section */}
        <Start />
        <Impressions />
        <Guides />
      </Box>
    </>
  );
}
