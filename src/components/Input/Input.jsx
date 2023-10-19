import { InputStyled, InputUnit, TextareaStyled } from "./Input.styled";

const Input = ({
  multiline,
  height,
  type,
  name,
  placeholder,
  onChange,
  background,
  ...rest
}) => {
  return (
    <>
      {multiline ? (
        <TextareaStyled
          height={height}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          background={background}
          {...rest}
        />
      ) : (
        <InputUnit>
          <InputStyled
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            background={background}
            {...rest}
          />
        </InputUnit>
      )}
    </>
  );
};

export default Input;
