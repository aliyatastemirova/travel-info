import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen h-full py-5 flex flex-col items-center space-y-6 w-3/4">
      <h4>Version 1.0.0</h4>
      <p className="text-center">
        This is a demo project to practice React and Tailwind using the
        <a
          target="_blank"
          rel="noreferrer"
          href="https://travelbriefing.org/api"
          className="text-orange-500"
        >
          {" "}
          Travelbriefing
        </a>{" "}
        API
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl py-2 px-1 font-bold w-32 text-center"
      >
        Go Back
      </Link>
    </div>
  );
};

export default About;
