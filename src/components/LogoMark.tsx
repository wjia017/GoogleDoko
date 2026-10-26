import logo from "../assets/logo.png";

interface LogoMarkProps {
  className?: string;
  title?: string;
  decorative?: boolean;
}

function LogoMark({ className, title = "GoogleDoko", decorative = false }: LogoMarkProps) {
  return (
    <img
      src={logo}
      alt={decorative ? "" : title}
      className={className}
      draggable={false}
      aria-hidden={decorative ? true : undefined}
    />
  );
}

export default LogoMark;
