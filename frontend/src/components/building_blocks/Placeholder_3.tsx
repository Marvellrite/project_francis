import { FC, ReactNode } from "react";
import "../../styles/_shared.scss";

type placeholder_3_type = {
  children: ReactNode;
  className?: string;
  title: string;
  toggler?: boolean;
  border_color?: string;
};

const Placeholder_3: FC<placeholder_3_type> = ({
  children,
  className,
  title,
  toggler,
  border_color,
}) => {
  return (
    <div className={className}>
      <div
        className={`bg-white rounded-2 border border-1 border-${border_color}`}>
        {toggler ? (
          <div className="title_toggler d-flex justify-content-between px-3 py-3 pb-1 fw-semibold text-secondary align-items-baseline">
            <div>{title}</div>{" "}
            <div>
              <button
                className="btn p-0"
                style={{ fontSize: "1.2rem", color: "inherit" }}>
                &#9660;
              </button>
            </div>
          </div>
        ) : (
          <div className="title_toggler d-flex px-3 py-3 fw-semibold text-secondary">
            {/* Ensure to input the toggler stuff */}
            <div>{title}</div>{" "}
          </div>
        )}

        <div className={`bg-white   rounded-2`}>{children}</div>
      </div>
    </div>
  );
};

export default Placeholder_3;
