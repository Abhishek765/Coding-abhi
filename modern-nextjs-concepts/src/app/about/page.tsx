import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About page", // absolute will ignore any parent overridden title
  },
  description: "This is About page",
};

const About = () => {
  return <div>About</div>;
};

export default About;
