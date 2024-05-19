import { styled } from "@mui/system";
import {  Card, CardContent } from "@mui/material";
import { BaseBox } from "../../BaseStyles";

export const StyledBox = styled(BaseBox)({
  flexDirection: "column",
  padding: "16px",
  borderBottom: "9px solid #c4c4c4",
  height: "50%",
  width: "100%",
});

export const StyledCard = styled(Card)({
  height: "80%",
  width: "250px",
  boxShadow: "none",
  borderRadius: "10px",
  position: "relative",
  overflow: "visible",
});

export const StyledCardContent = styled(CardContent)({
  height: "100%",
  width: "100%",
  border: "1px solid #000",
  borderRadius: "10px",
  backgroundColor: "#fff",
  position: "relative",
  padding: "10px",
  "&:last-child": {
    paddingBottom: "10px",
  },
});
