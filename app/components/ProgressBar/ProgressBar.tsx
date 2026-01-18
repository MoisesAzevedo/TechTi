type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      {/* barra */}
      <div className="relative flex-1 h-2 bg-[#11236E] rounded">
        <div
          className="h-2 bg-blue-600 rounded transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* string ao lado */}
      <span className="text-sm text-blue-700 font-medium">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default ProgressBar;
