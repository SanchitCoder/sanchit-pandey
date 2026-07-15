import { ArrowRight } from "lucide-react";

interface RollButtonProps {
  text: string;
  href?: string;
  wrapperClassName: string;
  textSizeClassName: string;
  circleClassName: string;
  arrowClassName: string;
  arrowSize?: number;
  gapClassName?: string;
}

export default function RollButton({
  text,
  href,
  wrapperClassName,
  textSizeClassName,
  circleClassName,
  arrowClassName,
  arrowSize = 14,
  gapClassName = "gap-8",
}: RollButtonProps) {
  const className = `group inline-flex items-center ${gapClassName} font-medium ${wrapperClassName}`;

  const content = (
    <>
      <span className={`h-[20px] overflow-hidden ${textSizeClassName}`}>
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="flex h-[20px] items-center leading-none">
            {text}
          </span>
          <span className="flex h-[20px] items-center leading-none">
            {text}
          </span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleClassName}`}
      >
        <ArrowRight size={arrowSize} className={arrowClassName} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}
