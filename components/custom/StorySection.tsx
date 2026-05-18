import SectionWrapper from './SectionWrapper';

const StorySection = () => {
  return (
    <SectionWrapper id="story" title="Storia">
      <p className="text-base md:text-xl text-gray-700 leading-relaxed">
        “Ca&apos; Mia” nasce nel 1986 grazie all&apos;impegno del parroco Don Aldo Molinaris,
        fondatore di questa opera parrocchiale, che in quegli anni, in pieno spirito di solidarietà
        e carità cristiana, accoglie i primi anziani soli e/o bisognosi di assistenza, senza fini di
        lucro. Don Aldo ha sempre voluto seguire il motto “Caritas Christi urget nos”{' '}
        <b className="text-[#57463F] italic">“L&apos;amore di Cristo ci spinge”</b>. Ha fatto sì che
        Ca&apos; Mia, nel corso degli anni, diventasse un preciso punto di riferimento per il paese,
        favorendo costantemente il rapporto con il territorio. Ha sostenuto in modo convinto
        l&apos;invecchiamento attivo, con la sua costante presenza, testimonianza e organizzazione
        di attività, progetti di “confronto/dialogo tra generazioni”. E&apos; stato un pastore
        sempre attento alle necessità materiali e spirituali di tutti.{' '}
        <b className="text-[#57463F] italic">
          Ogni ospite, dopo un giro in paese, incontrando i compaesani diceva: “torn a ca mia!”
        </b>
      </p>
    </SectionWrapper>
  );
};

export default StorySection;
