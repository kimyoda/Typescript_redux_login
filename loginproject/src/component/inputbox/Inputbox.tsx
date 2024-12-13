import { InputBoxContainer } from "./Inputbox.styles";

interface Props {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputbox = ({ type, onChange }: Props) => {
  return <InputBoxContainer type={type} onChange={onChange} />;
};

export default Inputbox;
