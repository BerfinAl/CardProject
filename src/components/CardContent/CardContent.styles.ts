import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { BaseBox } from "../../BaseStyles";

export const StyledBox = styled(BaseBox)({
  justifyContent: "end",
});

export const StyledForm = styled("form")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

export const StyledButton = styled(Button)({
  minWidth: "unset",
  width: "16px",
  borderRadius: "0",
  height: "16px",
  backgroundColor: "#5cb85c",
  "&:hover": {
    backgroundColor: "#3b703b",
  },
  "&[disabled]": {
    backgroundColor: "#c4c4c4",
  },
});
