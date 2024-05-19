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
};

function CardContentComponent({
  isInteractive,
  handleSubmit,
}: CardContentProps) {
  const INITIAL_VALUES = {
    title: isInteractive ? "New Title" : "",
    description: isInteractive ? "New Description" : "",
    image: { file: null, imageSrc: "" },
  };

  const [formData, setFormData] = useState<FormDataStateType>({
    title: INITIAL_VALUES.title,
    description: INITIAL_VALUES.description,
    image: INITIAL_VALUES.image,
  });

  const { title, description, image } = formData;

  const [isFilled, setIsFilled] = useState<Boolean>(false);

  useEffect(() => {
    checkIsFilled(title, description, image.imageSrc);
  }, [title, description, image.imageSrc]);

  useEffect(() => {
    if (!isInteractive) {
      getLatestCard(setFormData);
    }
  }, []);

  function handleFocus(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (isInteractive) return e.target.select();
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
    }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setFormData((prev) => ({
      ...prev,
      description: newDescription,
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

  const checkIsFilled = (
    newTitle: string,
    newDescription: string,
    newImageInput: string
  ) => {
    setIsFilled(
      newImageInput !== INITIAL_VALUES.image.imageSrc &&
        newTitle !== INITIAL_VALUES.title &&
        newDescription !== INITIAL_VALUES.description
    );
  };

const submitFunction = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    if (handleSubmit) {
      handleSubmit(e, title, description, image);
    } else {
      console.error("handleSubmit is undefined");
    }

    setFormData(INITIAL_VALUES);
  } catch (error) {
    console.log(error);
  }
};


  const formElements = (
    <>
      <Title
        text={title}
        handleChange={handleTitleChange}
        handleFocus={handleFocus}
        isInteractive={isInteractive}
      />
      <Description
        text={description}
        handleChange={handleDescriptionChange}
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
