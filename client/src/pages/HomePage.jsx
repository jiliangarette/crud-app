import SectionContainer from "@components/common/SectionContainer";
import SectionTitle from "@components/common/SectionTitle";

import ImplementationSection from "@features/home/ImplementationSection";
import DataModelSection from "@features/home/DataModelSection";
import BlogPostList from "@features/home/BlogPostList";
import HeroSection from "@features/home/HeroSection";
import BlogForm from "@features/home/BlogForm";

const HomePage = () => {
  const data = [
    {
      title: "hello world title",
      content: "hello world contentn",
      published_at: "2 days ago",
    },
    {
      title: "The state of the art react",
      content: "Welcom to the new react conference 2025",
      published_at: "2 days ago",
    },
  ];
  return (
    <>
      <div className="py-12 gap-12 flex flex-col">
        <SectionContainer id="hero">
          <HeroSection>
            <SectionTitle>A Minimalist CRUD Blog</SectionTitle>
          </HeroSection>
        </SectionContainer>
        <SectionContainer id="data-model">
          <DataModelSection>
            <SectionTitle>Blog Post Data Model</SectionTitle>
          </DataModelSection>
        </SectionContainer>
        <SectionContainer id="demo">
          <SectionTitle>How It Works</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <BlogPostList blogs={data} />
            <BlogForm />
          </div>
        </SectionContainer>
        <SectionContainer id="implementation">
          <ImplementationSection>
            <SectionTitle>Implementation Details</SectionTitle>
          </ImplementationSection>
        </SectionContainer>
      </div>
    </>
  );
};

export default HomePage;
