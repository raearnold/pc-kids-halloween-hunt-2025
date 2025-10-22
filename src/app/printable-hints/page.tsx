import {title, hints, basePath as configBasePath } from "../hunt-config";
import Image from "next/image";
import type { FC, ReactNode } from "react";

export const dynamic = 'error';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || configBasePath;

type PageProps = {
  img: string;
  alt: string;
  subtitle: string;
  content: ReactNode;
};

const Page: FC<PageProps> = ({img, alt, subtitle, content}) => (
    <section className="print:page-break-after text-center p-10 text-[1.5rem] min-h-screen flex flex-col items-center justify-center gap-8">
        <h1>{title}</h1>
        <h2 className="text-[3rem]">{subtitle}</h2>
        <Image
            src={img}
            alt={alt}
            width={400}
            height={400}
            priority
        />
        <div className="p-10">{content}</div>
    </section>
);

export default function PrintableHints() {
  return (
    <>
      <div className="print:hidden text-center font-bold mb-8 p-8 border-b-2 border-orange-300 bg-orange-300">
        Don&apos;t worry about how this page looks on screen. Hit print to print a styled version of each QR code on its own page.
      </div>
        {hints.map((hint: { id: number }) => (
            <Page 
                key={hint.id}
                img={`${basePath}/qr-codes/hint-${hint.id}.png`}
                alt={`QR code for Hint #${hint.id}`}
                subtitle={`Hint ${hint.id}`}
                content={<>Scan the QR code to see your next hint! <br/><br/>And remember, please leave the ghost here for others to find.</>}
            />
        ))}
        <Page
            key="congrats"
            img={`${basePath}/qr-codes/congratulations.png`}
            alt="QR code for Congratulations page"
            subtitle="You Did It!"
            content={<>Scan the code to see how to claim your prize!</>}
        />
    </>
  );
}
