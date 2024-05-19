export interface ImageType  {
  file: File | null;
  imageSrc: string;
}

export type SubmitFnType = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    description: string,
    image: ImageType
  ) => void;

export interface InputProps<T> {
  text: string;
  isInteractive: boolean;
  handleChange?: React.ChangeEventHandler<T>;
  handleFocus?: React.FocusEventHandler<T>;
}