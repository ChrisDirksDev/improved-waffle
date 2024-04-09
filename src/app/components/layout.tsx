import Navbar from "./navbar/navbar";
import { link } from "./types";
import '../globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  //const { data, error } = useSWR('/api/navigation', fetcher)
  const links: link[] = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/contact", name: "Contact" },
  ];
  const { data, error } = { data: { links: links }, error: null };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
    </>
  );
}
