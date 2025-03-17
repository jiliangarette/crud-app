import Button from "@components/common/Button.jsx";

const HeroSection = ({ children }) => {
  return (
    <div className="container mx-auto px-4 text-center">
      {children}
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
        A functional demonstration of Create, Read, Update, and Delete
        operations using blog posts instead of the conventional to-do list.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#demo">
          <Button variant="primary">View Demo</Button>
        </a>
        <a href="#">
          <Button variant="secondary">Github Repo</Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
