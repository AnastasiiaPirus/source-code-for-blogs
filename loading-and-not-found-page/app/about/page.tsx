import Link from "next/link";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <h3>
        <Link href="/not-existing-route">Not Found</Link>
      </h3>
    </>
  );
};

export default About;
