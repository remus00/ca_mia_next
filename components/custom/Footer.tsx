import { Bus, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <div id="footer" className="grid md:grid-cols-2 grid-cols-1 md:gap-20 bg-[#57463F] text-white ">
      <div className="relative col-span-1 flex flex-col overflow-hidden py-8 md:py-20 px-6 md:px-20 md:pl-20 gap-4 md:gap-8">
        <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden>
          <Image src="/footer-img.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#57463F]/80" />
        </div>

        <div className="relative z-10 flex flex-col gap-4 md:gap-8">
          <FooterItem
            title='R.S.A. "Ca&apos; Mia"'
            description={
              <span>
                Indirizzo: Via San G. B. Cottolengo, 8 <br /> 12060 Pocapaglia – CN <br /> Email:
                ca.mia.pocapagllia@outlook.it <br /> PEC: camia.srl@legalmail.it <br /> telefono:
                0172 47 32 25
              </span>
            }
          />

          <FooterItem
            title="Normativa"
            description={
              <span>
                L. 24/2017 “Legge Gelli-Bianco” <br />
                Copertura assicurativa Unipol Assicurazioni tramite Vittoria Assicurazioni
              </span>
            }
          />

          <FooterItem
            title="Orari"
            description={
              <span className="flex flex-col gap-0">
                <span>Orario visite:</span>
                tutti i giorni dalle 10:00 alle 18:00
                <span className="mt-2">Orario ufficio:</span>
                dal lunedì al venerdì dalle 9:00 alle 18:00
              </span>
            }
          />

          <FooterItem
            title="Come raggiungerci"
            description={
              <span>
                &quot;Ca&apos; Mia&quot; è situata in Pocapaglia Villa, a 200 mt dal centro storico,
                a 6 km da Bra e a 15 km da Alba.
              </span>
            }
          />

          <div className="flex items-center gap-4 lg:flex-row flex-col">
            <Link
              href="https://maps.app.goo.gl/K6TS4ukjNwRWvP556"
              target="_blank"
              className="max-sm:w-full"
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-lg font-medium px-8 py-4 flex items-center justify-center min-h-12 max-sm:w-full"
              >
                <MapPin className="size-6" /> Google Maps
              </Button>
            </Link>
            <Link
              href="https://static1.squarespace.com/static/5c2cde23b40b9de11c1db1c9/t/633d853aeac4d70e8fd6f909/1664976192446/467-BRA-POCAPAGLIA.pdf"
              target="_blank"
              className="max-sm:w-full"
            >
              <Button
                variant="secondary"
                className="text-lg font-medium px-8 py-4 flex items-center justify-center min-h-12 max-sm:w-full"
              >
                <Bus className="size-6" /> Orari autobus
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative col-span-1 h-full w-full">
        <Image src="/footer-img.jpg" alt="Map" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Footer;
