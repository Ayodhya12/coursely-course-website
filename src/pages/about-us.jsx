import { Button } from "../components/button";
import { CourseCard } from "../components/course-card";
import { HeadSection } from "../components/head-section";
import { CiShop } from "react-icons/ci";
import { IoShapesOutline } from "react-icons/io5";
import { BsBraces } from "react-icons/bs";

export const AboutUs = () => {
  return (
    <div className="py-20 text-center">
      <div className="flex flex-row">
        <HeadSection
          subtitle="What we do"
          title="Our education system will give you the perfect solution"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Class aptent taciti sociosqu."
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto mt-20">
        <CourseCard
          icon={<CiShop className="text-green-600 text-xl" />}
          title="Digital Marketing Solution & Experience"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa."
          linkText="Learn More"
          linkHref="#"
          iconBg="bg-green-100"
        />
        <CourseCard
          icon={<IoShapesOutline className="text-blue-600 text-xl" />}
          iconBg="bg-blue-100"
          title="UI / UX Design Solution & Experience"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa."
          linkText="Learn More"
          linkHref="#"
        />

        <CourseCard
          icon={<BsBraces className="text-orange-500 text-xl" />}
          iconBg="bg-orange-100"
          title="Web and App Development Solution"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam ut tincidunt massa."
          linkText="Learn More"
          linkHref="#"
        />
      </div>
    </div>
  );
};
