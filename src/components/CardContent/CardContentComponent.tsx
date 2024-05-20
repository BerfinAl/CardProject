import Title from "../Title/Title";
import Description from "../Description/Description";
import FileInput from "../FileInput/FileInput";
import { useState, FocusEvent, ChangeEvent, useEffect, FormEvent } from "react";

import { getLatestCard } from "../../utils";
import { ImageType, SubmitFnType } from "../../types/types";
import { StyledForm, StyledButton, StyledBox } from "./CardContent.styles";

type FormDataStateType = {
  title: string;
  description: string;
  image: ImageType;
};

interface CardContentProps {
  isInteractive: boolean;
  handleSubmit?: SubmitFnType;
}

function CardContentComponent({
  isInteractive,
  handleSubmit,
}: CardContentProps) {
  const INITIAL_VALUES = {
    title: isInteractive ? "New Title" : "",
    description: isInteractive ? "New Description" : "",
    image: { file: null, imageSrc: "" },
  };

  const [formData, setFormData] = useState<FormDataStateType>(INITIAL_VALUES);
  const { title, description, image } = formData;
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const checkIfFilled = () => {
    return (
      title !== INITIAL_VALUES.title &&
      image.imageSrc !== INITIAL_VALUES.image.imageSrc &&
      description !== INITIAL_VALUES.description &&
      title !== "" &&
      description !== "" &&
      image.imageSrc !== ""
    );
  };

  useEffect(() => {
    setIsFilled(checkIfFilled());
  }, [title, description, image.imageSrc]);


  useEffect(() => {
    if (!isInteractive) {
      getLatestCard(setFormData);
    }
  }, [isInteractive]);

  function handleFocus(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (isInteractive) return e.target.select();
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormDataStateType
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageSrc = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: { file, imageSrc },
      }));
    }
  };

  const submitFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleSubmit) {
      handleSubmit(e, title, description, image);
    }
    setFormData(INITIAL_VALUES);
  };

  const formElements = (
    <>
      <Title
        text={title}
        handleChange={(e) => handleChange(e, "title")}
        handleFocus={handleFocus}
        isInteractive={isInteractive}
      />
      <Description
        text={description}
        handleChange={(e) => handleChange(e, "description")}
        handleFocus={handleFocus}
        isInteractive={isInteractive}
      />
      <FileInput
        showImageInput={
          formData.image.imageSrc === INITIAL_VALUES.image.imageSrc
        }
        handleChange={handleImageInput}
        imageSrc={image.imageSrc}
        isInteractive={isInteractive}
      />
    </>
  );

  return isInteractive ? (
    <StyledForm onSubmit={submitFunction}>
      {formElements}
      <StyledBox>
        <StyledButton type="submit" disabled={!isFilled}></StyledButton>
      </StyledBox>
    </StyledForm>
  ) : (
    <StyledForm as="div"> {formElements}</StyledForm>
  );
}

export default CardContentComponent;
