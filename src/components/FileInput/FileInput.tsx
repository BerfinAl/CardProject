import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  StyledImage,
  StyledImgBox,
  StyledImgWrapper,
} from "./FileInput.styles";

interface FileInputProps {
  isInteractive: boolean;
  showImageInput?: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  imageSrc: string;
}

function FileInput({
  showImageInput,
  handleChange,
  imageSrc,
  isInteractive,
}: FileInputProps) {
  return (
    <StyledImgWrapper>
      <StyledImgBox
        component="label"
        interactive={isInteractive}
        showInput={showImageInput ?? false}
      >
        {showImageInput && isInteractive ? (
          <>
            <AddIcon sx={{ fontSize: "50px" }} />
            Gorsel
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              hidden
              name="image"
              onChange={handleChange}
            />
          </>
        ) : imageSrc ? (
          <StyledImage src={imageSrc} alt="" />
        ) : null}
      </StyledImgBox>
    </StyledImgWrapper>
  );
}

export default FileInput;
