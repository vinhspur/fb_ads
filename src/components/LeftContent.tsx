import { Box, List, ListItem, ListItemIcon, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const LeftContent = () => {
  return (
    <Box
      width="60px"
      bgcolor="#ffffff"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRight="1px solid #ddd"
    >
      {/* Menu chính */}
      <List>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Trang chủ" arrow placement="right">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Chiến dịch" arrow placement="right">
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Đánh giá" arrow placement="right">
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>

      {/* Cài đặt */}
      <List>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{ "&:hover": { bgcolor: "#e0e0e0" } }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftContent;
