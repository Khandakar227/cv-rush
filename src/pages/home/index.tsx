import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen lg:pt-16">
        <div className="lg:flex justify-center items-center gap-4 custom-h max-w-7xl mx-auto">
          <div className="grid justify-center items-center gap-4 p-4">
            <h1 className="font-semibold text-6xl font-lora py-4">
              Take the Hassle Out of CV Writing
            </h1>
            <p className="py-4 text-lg">
              No time to rush? Rush with our CVRush
            </p>
            <p className="py-8">
              Effortlessly create a tailored CV with our automated generator web
              app, designed to save you time and help you land your dream job.
              Choose from a variety of professional templates and easily input
              your personal details, work experience, education, and skills to
              generate a polished CV in just minutes.
            </p>
            <div className="hidden lg:block">
              <Link to={"/cvgenerator"}>
                <button className="bg-black text-white rounded-md py-4 px-8">
                  Generate CV
                </button>
              </Link>
            </div>
          </div>
          <img
            className="w-full max-w-xs lg:max-w-lg shadow-md rounded-md mx-auto"
            src="/images/CV_intro.png"
            width={600}
            height={800}
            alt="CV intro"
          />
          <div className="lg:hidden mx-auto p-8">
            <Link to={"/cvgenerator"}>
              <button className="bg-black text-white rounded-md py-4 px-8">
                Generate CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
