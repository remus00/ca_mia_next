import { Bus, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div id="footer" className="grid grid-cols-2 gap-20 bg-[#57463F] text-white ">
      <div className="col-span-1 flex flex-col py-20 pl-20">
        <p className="text-2xl font-bold mb-2">R.S.A. &quot;Ca&apos; Mia&quot;</p>
        <p className="text-lg text-gray-100">
          Indirizzo: Via San G. B. Cottolengo, 8 <br /> 12060 Pocapaglia – CN <br /> Email:
          ca.mia.pocapagllia@outlook.it <br /> PEC: camia.srl@legalmail.it <br /> telefono: 0172 47
          32 25
        </p>

        <p className="text-2xl font-bold mb-2 mt-6">Orari</p>
        <p className="text-lg">
          Orario visite: <br /> tutti i giorni dalle 10:00 alle 18:00
        </p>
        <p className="text-lg text-gray-100 mt-2">
          Orario ufficio: <br /> dal lunedì al venerdì dalle 9:00 alle 18:00
        </p>

        <p className="text-2xl font-bold mb-2 mt-6">Come raggiungerci</p>
        <p className="text-lg">
          &quot;Ca&apos; Mia&quot; è situata in Pocapaglia Villa, a 200 mt dal centro storico, a 6
          km da Bra e a 15 km da Alba.
        </p>

        <p className="text-lg mt-4">
          Può essere raggiunta con autobus (linea 7) da Bra Movicentro con partenza ogni ora fino
          alle 18,00.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link href="https://maps.app.goo.gl/K6TS4ukjNwRWvP556" target="_blank">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg font-medium px-8 py-4 flex items-center justify-center min-h-12"
            >
              <MapPin className="size-6" /> Google Maps
            </Button>
          </Link>
          <Link
            href="https://static1.squarespace.com/static/5c2cde23b40b9de11c1db1c9/t/633d853aeac4d70e8fd6f909/1664976192446/467-BRA-POCAPAGLIA.pdf"
            target="_blank"
          >
            <Button
              variant="secondary"
              className="text-lg font-medium px-8 py-4 flex items-center justify-center min-h-12"
            >
              <Bus className="size-6" /> Orari autobus
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative col-span-1 h-full w-full">
        <Image src="/footer-img.jpg" alt="Map" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Footer;
