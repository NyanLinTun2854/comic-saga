import { Box, Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import MainLogo from "../assets/images/mainLogo.png";

import React from "react";

type Anchor = "left";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
    bottom: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      somthing
    </Box>
  );

  return (
    <React.Fragment key="left">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ paddingX: "15px" }}
      >
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <AiOutlineMenu
            className="w-[25px] h-[25px]"
            onClick={toggleDrawer("left", true)}
          />
          <Box sx={{ width: "50px", height: "50px" }}>
            <img src={MainLogo} className="w-full h-full" />
          </Box>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <CiSearch className="w-[30px] h-[30px]" />
          <Box
            sx={{
              width: "35px",
              height: "35px",
              backgroundColor: "#f0f1f2",
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GoPerson className="w-[30px] h-[30px]" />
          </Box>
        </Stack>
      </Stack>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
