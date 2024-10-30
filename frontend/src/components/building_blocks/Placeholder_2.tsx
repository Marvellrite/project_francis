import { FC, ReactNode } from "react";

type placeholder_1_type = {
  children: ReactNode;
  className?: string;
};

const Placeholder_2: FC<placeholder_1_type> = ({ children, className }) => {
  return (
    <div className={"col-12 gx-3 gy-3" + " " + className}>
      <div className="bg-white px-3 py-3 rounded-2">{children}</div>
    </div>
  );
};

export default Placeholder_2;
