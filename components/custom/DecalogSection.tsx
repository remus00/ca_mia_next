import { listItems } from '@/constants';
import SectionWrapper from './SectionWrapper';

const DecalogSection = () => {
  return (
    <SectionWrapper id="decalog" title="Decalogo">
      <ol
        type="a"
        className="list-outside list-[lower-alpha] ps-8 text-base md:text-xl leading-relaxed text-gray-700 [&_li]:marker:text-[#57463F]"
      >
        {listItems.map((item) => (
          <ListItem key={item.title} title={item.title} description={item.description} />
        ))}
      </ol>
    </SectionWrapper>
  );
};

const ListItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li className="text-base md:text-xl text-gray-700 leading-relaxed not-first:mt-2">
      <div className="flex flex-col gap-0">
        <p className="font-semibold text-[#57463F] italic">{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default DecalogSection;
