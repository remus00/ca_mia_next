import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title: string;
  className?: string;
}

const SectionWrapper = ({ children, id, title, className }: SectionWrapperProps) => {
  return (
    <div
      id={id}
      className={cn(
        'w-full h-fit px-6 py-16 md:py-28 md:px-20 bg-[#f5f5f5] flex flex-col',
        className,
      )}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-[#57463F] italic mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SectionWrapper;
