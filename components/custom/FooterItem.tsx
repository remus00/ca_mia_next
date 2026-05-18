interface FooterItemProps {
  title: string;
  description: React.ReactNode;
}

const FooterItem = ({ title, description }: FooterItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl md:text-2xl font-bold">{title}</p>
      <p className="text-base md:text-lg text-gray-100">{description}</p>
    </div>
  );
};

export default FooterItem;
