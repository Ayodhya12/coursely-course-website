export const CourseCard = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  iconBg = "bg-green-100",
  linkColor = "text-blue-600",
}) => {
  return (
    <div className="w-full lg:w-72 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition text-left">
      <div className={`${iconBg} p-3 inline-block rounded-xl mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <a
        href={linkHref}
        className={`${linkColor} font-medium flex items-center`}
      >
        {linkText} <span className="ml-1">→</span>
      </a>
    </div>
  );
};
