import SectionWrapper from './SectionWrapper';

const MissionSection = () => {
  return (
    <SectionWrapper id="mission" title="Missione">
      <p className="text-base md:text-xl text-gray-700 leading-relaxed">
        “Ca&apos; Mia” ha come obiettivo delle sue attività il garantire l&apos;assistenza, la cura
        e tutte le risposte necessarie allo stato di bisogno psicofisico delle persone in essa
        ospitate, attraverso la disponibilità organizzata di risorse umane e materiali. Si struttura
        in modalità comunitaria rivolta a persone perlopiù anziane che possono trarre beneficio dai
        suoi servizi, che sono in condizione di non autosufficienza o di parziale autosufficienza,
        per le quali non sia possibile il mantenimento nel proprio ambiente familiare e sociale. La
        Mission pone al centro dell&apos;attenzione organizzativa l&apos;ospite. Tutte le modalità
        attuative della gestione, in sintonia con quanto previsto dalle vigenti normative, sono
        pensate in funzione di garantire al singolo la disponibilità di un trattamento il più
        possibile personalizzato. Sappiamo che ciascun ospite porta con sé esigenze di tipo primario
        (igiene, alimentazione, riposo, ecc.) così come una richiesta di tutela, mantenimento ed
        eventualmente di recupero, di tutte le sue capacità. <br />
      </p>
      <p className="text-base md:text-xl text-gray-700 leading-relaxed mt-4">
        Sintetizzando, i bisogni che la persona presenta in modo unitario ed individuale possono
        essere così identificati:
      </p>
      <ul className="text-base md:text-xl text-gray-700 leading-relaxed list-disc list-inside">
        <li className="ml-4">bisogni primari fisiologici</li>
        <li className="ml-4">bisogni di tutela ed aiuto</li>
        <li className="ml-4">bisogni sanitari</li>
        <li className="ml-4">bisogni di prevenzione e riabilitazione</li>
        <li className="ml-4">bisogni affettivi e relazionali</li>
      </ul>

      <p className="text-base md:text-xl text-gray-700 leading-relaxed mt-4">
        Nella complessità delle richieste del singolo quindi, l&apos;organizzazione della struttura
        nel suo complesso riconosce e stabilisce percorsi di intervento che tengono conto di quanto
        evidenziato ed evidenziabile, in modo da creare un&apos;opportunità di vita il più possibile
        accettabile e compatibile con le necessità di ognuno.
      </p>
    </SectionWrapper>
  );
};

export default MissionSection;
