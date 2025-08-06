export const HeadSection = ({ subtitle, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto gap-6">
      <div>
        <p className="text-sm text-primary-600 font-body text-start">
          {subtitle}
        </p>
        <h2 className="text-3xl text-start text-secondary-800 font-heading mt-2">
          {title}
        </h2>
      </div>
      <div className="mt-1 lg:mt-10">
        <p className="text-gray-500 max-w-2xl">{description}</p>
      </div>
    </div>
  );
};
