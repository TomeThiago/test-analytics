import { ReactNode } from "react";
import "./styles.css";

export const Main = ({ children }: any) => {
  return (
    <div className="main">
      <div className="main-content">{children}</div>
    </div>
  );
};
