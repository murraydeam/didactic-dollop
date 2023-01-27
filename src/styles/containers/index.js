import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "3rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));

export const ProjectContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
}));
export const HeaderContainer = styled(Box)(({ theme }) => ({
  fontSize: "4rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
    lineHeight: "3.5rem",
  },
}));
