import { Github } from "lucide-react";

const FooterLayout = () => {
  return (
    <footer className="border-t border-slate-200 h-12 flex items-center justify-between px-4">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Jiliann. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a href="#" className="text-slate-600">
          <span className="sr-only">GitHub</span>
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
};

export default FooterLayout;
