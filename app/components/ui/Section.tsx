import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
  containerClass = ""
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClass?: string;
}) {
  return (
    <section id={id} className={className}>
      <Container className={containerClass}>{children}</Container>
    </section>
  );
}
