import { styled } from "@mui/material";
import { BaseBox } from "../../BaseStyles";

export const StyledImgBox = styled(BaseBox, {
  shouldForwardProp: (prop) => prop !== 'interactive' && prop !== 'showInput',
})<{ interactive: boolean; showInput: boolean }>(({ interactive, showInput }) => ({
  height: "100%",
  backgroundColor: interactive
    ? showInput
      ? "#e2b6a7"
      : "#fff"
    : showInput
    ? "#c4c4c4"
    : "#fff",
  "&:hover": interactive && showInput ? {
    cursor: "pointer",
  } : undefined,
  flexDirection: "column",
}));

export const StyledImgWrapper = styled("div")({
  height: "50%",
  marginTop: "0",
});

export const StyledImage = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "contain",
});
