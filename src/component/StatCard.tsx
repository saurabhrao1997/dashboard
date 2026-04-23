


interface Props {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: Props) => {
  return (
    <div
      className="
        bg-white text-gray-800 
        dark:bg-[#2a2a40] dark:text-white 
        p-6 rounded-xl shadow 
        transition-colors duration-300
        border border-gray-200 dark:border-gray-700
      "
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;