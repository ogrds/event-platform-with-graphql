import { CaretRight } from "phosphor-react";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface CardAuxilarContentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  leftIcon: ReactNode;
  title: string;
  subtitle: string;
}

export const CardAuxilarContent: React.FC<CardAuxilarContentProps> = ({
  leftIcon,
  title,
  subtitle,
  ...rest
}) => {
  return (
    <a
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
      {...rest}
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        {leftIcon}
      </div>

      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{subtitle}</p>
      </div>

      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
};
