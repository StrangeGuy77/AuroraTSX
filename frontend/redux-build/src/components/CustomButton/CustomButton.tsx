import * as React from "react";

const CustomButton: React.FC<IProps> = ({ children, className, onClickHandler, name }) => {

  return (
    <div>
      <button className={className} onClick={async () => await onClickHandler(name)}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  onClickHandler: (...args: any) => any;
}
