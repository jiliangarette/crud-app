import { Link } from "react-router-dom";
import Button from "@components/common/Button";
import { BookOpenText, HomeIcon } from "lucide-react";

const NavbarLayout = () => {
  return (
    <nav className="h-10 px-4 flex justify-between items-center border-b border-slate-200">
      <div>
        <Link to="/">
          <Button variant="ghost" icon={<HomeIcon size={14} />}>
            Home
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <Link to="/blog">
          <Button icon={<BookOpenText size={14} />}>Blog</Button>
        </Link>
        <Link to="/login">
          <Button variant="primary">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLayout;
