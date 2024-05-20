import { styled } from "@mui/system";
import {  Input, Typography } from "@mui/material";

export const StyledTitleWrapper = styled("div")({
height: "10%",
});

export const StyledInput = styled(Input)({
  fontWeight: 700,
  color: "#e2b6a7",
});

export const StyledTypography = styled(Typography)({
  height: "100%",
  position: "relative",
  fontWeight: 700,
  color: "#e2b6a7",
  padding: "4px 0 5px",
  margin: 0,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
wordWrap: "break-word"
});
