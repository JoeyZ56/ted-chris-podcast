import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between m-2">
      <div>
        <p>Links:</p>
        <Link href="/">🤪</Link>
        <Link href="/">🤩</Link>
        <Link href="/">🤓</Link>
      </div>
      <div>
        <p>© 2024</p>
      </div>
    </div>
  );
};

export default Footer;
