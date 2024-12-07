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
            padding: "16px 0px",
          }}
        >
          <Box>
            <Tooltip title="Trang chủ" arrow placement="right">
              <img
                src={"/logo-meta.svg"}
                alt="Logo Meta"
                style={{ width: "30px", height: "30px" }}
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
            padding: "8px 0px 32px 0px",
          }}
        >
          <Tooltip title="" arrow placement="right">
            <img
              src={"/avatar.jpg"}
              alt="Logo Meta"
              style={{ width: "30px", height: "30px", borderRadius: 4 }}
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
              src={"/meter-checker.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
            backgroundColor: "#C3DCF5",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/time.png"}
              alt="Logo Meta"
              style={{ width: "25px", height: "25px" }}
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
          <Tooltip title="Báo cáo quảng cáo" arrow placement="right">
            <img
              src={"/file.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
          <Tooltip title="Đối tượng" arrow placement="right">
            <img
              src={"/people.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/credit-card.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/sound.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/menu.png"}
              alt="Logo Meta"
              style={{ width: "24px", height: "24px" }}
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
            backgroundColor: "#DCF0EB",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            marginLeft: "12px",
          }}
        >
          <Tooltip title="Cài đặt" arrow placement="right">
            <img
              src={"/question.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/paper.png"}
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
              style={{ width: "22px", height: "22px" }}
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
              src={"/bell.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/search-interface-symbol.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
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
              src={"/bug.png"}
              alt="Logo Meta"
              style={{ width: "22px", height: "22px" }}
            />
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftContent;
