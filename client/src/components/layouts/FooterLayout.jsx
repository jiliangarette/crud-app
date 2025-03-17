import { Github } from "lucide-react";
import Button from "../common/Button";

const FooterLayout = () => {
  return (
    <footer className="border-t border-slate-200 h-10 flex items-center justify-between px-4">
      <div className="text-xs flex items-center">
        © {new Date().getFullYear()} /
        <Button
          variant="link"
          link="http://jiliangarette.com"
          className="text-gray-950"
        >
          jiliangarette.com
        </Button>
      </div>
      <Button
        link="http://github.com/jiliangarette"
        icon={<Github size={14} />}
        variant="icon"
      />
    </footer>
  );
};

export default FooterLayout;
