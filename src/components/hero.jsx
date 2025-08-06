import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto gap-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="flex max-w-lg items-center rounded-xl text-secondary-800 p-1 dark:bg-secondary-200 justify-center">
            <span className="bg-secondary-800 px-2 rounded-full text-white font-bold mr-2">
              New
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <h1 className="text-4xl md:text-5xl font-heading text-text-800 my-4">
            Find your <span className="text-primary-600">Course</span> <br /> &
            make sure goal.
          </h1>
          <p className="text-lg font-body text-text-800">
            Your dream courses is waiting for you. 👋
          </p>
          <div className="mt-6 flex gap-4  justify-center lg:justify-start">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Play Video</Button>
          </div>
        </div>

        <div className="hidden lg:block w-1/2">
          <img src="/src/img/student-image-01.png" alt="Happy Student" />
        </div>
      </div>
    </div>
  );
};
