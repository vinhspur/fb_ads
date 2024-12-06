import { Box, List, ListItem, Tooltip } from "@mui/material";

const LeftContent = () => {
  return (
    <Box
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
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Tooltip title="Trang chủ" arrow placement="right">
              <img
                src={"/logo-meta.svg"}
                alt="Logo Meta"
                style={{ width: "32px", height: "32px" }}
              />
            </Tooltip>
          </Box>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Chiến dịch" arrow placement="right">
            <img
              src={"/avatar.jpg"}
              alt="Logo Meta"
              style={{ width: "32px", height: "32px", borderRadius: 4 }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Đánh giá" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
      </List>

      {/* Cài đặt */}
      <List>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{
                width: "20px",
                height: "20px",
                justifyContent: "center",
              }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
        <ListItem
          component="a"
          href="#"
          sx={{
            "&:hover": { bgcolor: "#e0e0e0" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/settings.png"}
              alt="Logo Meta"
              style={{ width: "20px", height: "20px" }}
            />
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftContent;
