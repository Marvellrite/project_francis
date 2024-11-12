import { FC, ReactNode } from "react";
import "../../styles/_shared.scss";
import "../../styles/components/bordered_title_container_2.scss";

type placeholder_3_type = {
  children: ReactNode;
  className?: string;
  title: ReactNode;
  border_color?: string;
  title_position?: string
};

const Bordered_titled_container_2: FC<placeholder_3_type> = ({
  children,
  className,
  title,
  border_color,
  title_position='middle'
}) => {
  return (
    <div className={className}>
      <div
        className={`bg-white rounded-2 border border-1 position-relative bordered_TC_2 border-${border_color}`}>
        <div className={`fw-semibold text-secondary translate-middle title ${title_position} text-center`}>
          {title}
        </div>{" "}
        <div className={`bg-white px-3 pe-3 rounded-4`}>{children}</div>
      </div>
    </div>
  );
};

export default Bordered_titled_container_2;
