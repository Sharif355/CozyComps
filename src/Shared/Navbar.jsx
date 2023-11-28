import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import PetsIcon from "@mui/icons-material/Pets";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";

const pages = (
  <div className="flex flex-col md:flex-row">
    <NavLink
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "semibold" : "",
          color: isActive ? "white" : "gray",
          viewTransitionName: isTransitioning ? "slide" : "",
          backgroundColor: isPending ? "red" : "",
        };
      }}
      className="ml-2"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "semibold" : "",
          color: isActive ? "white" : "gray",
          viewTransitionName: isTransitioning ? "slide" : "",
          backgroundColor: isPending ? "red" : "",
        };
      }}
      className="ml-2"
      to="/allPets"
    >
      Pet Listing
    </NavLink>
    <NavLink
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "semibold" : "",
          color: isActive ? "white" : "gray",
          viewTransitionName: isTransitioning ? "slide" : "",
          backgroundColor: isPending ? "red" : "",
        };
      }}
      className="ml-2"
      to="/campaign"
    >
      Donation Campaigns
    </NavLink>
  </div>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        icon: "success",
        text: "User LoggedOut Successfully",
        confirmButtonText: "ok",
      });
    });
  };

  return (
    <AppBar
      sx={{ background: "#063970", marginBottom: "40px", position: "sticky" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              flexGrow: 1,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CozyComps
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CozyComps
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open Dashboard">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img
                    className="rounded-full w-10"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "Bold" : "",
                    color: isActive ? "white" : "gray",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    backgroundColor: isPending ? "red" : "",
                  };
                }}
                className="ml-2"
                to="/login"
              >
                <button className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  {" "}
                  Login
                </button>
              </NavLink>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div className="flex flex-col ">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "semibold" : "",
                      color: isActive ? "white" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                      backgroundColor: isPending ? "red" : "",
                    };
                  }}
                  className="ml-2"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <button onClick={handleLogOut}>Logout</button>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
