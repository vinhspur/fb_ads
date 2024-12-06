import { Box } from "@mui/material";
import "./App.css";
import LeftContent from "./components/LeftContent";
import MainContent from "./components/MainContent";
import RightContent from "./components/RightContent";

function App() {
  return (
    <Box display="flex" height="100vh">
      {/* Left Sidebar */}
      <Box width="56px" bgcolor="#f4f4f4" borderRight="1px solid #ddd">
        <LeftContent />
      </Box>

      {/* Main Content */}
      <Box flex="1" padding={2}>
        {/* Thanh công cụ và bảng dữ liệu */}
        <MainContent />
      </Box>

      {/* Right Panel */}
      <Box width="56px" bgcolor="#f9f9f9" borderLeft="1px solid #ddd">
        <RightContent />
      </Box>
    </Box>
  );
}

export default App;
