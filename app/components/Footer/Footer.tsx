import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const aboutLinks = [
    { text: "Sobre a Empresa", href: "/sobre" },
    { text: "Termos e Condições", href: "/termos" },
    { text: "Contato", href: "/contato" },
    { text: "F.A.Q", href: "/faq" },
  ];

  const solutionLinks = [
    { text: "Manutenção", href: "/manutencao" },
    { text: "Consultoria", href: "/solucoes/consultoria" },
    { text: "Infraestrutura", href: "/solucoes/infraestrutura" },
    { text: "Gestão de T.I.", href: "/solucoes/gestao" },
  ];

  const policyLinks = [
    { text: "Política de Privacidade", href: "/privacidade" },
    { text: "Política de Segurança", href: "/seguranca" },
    { text: "Suporte", href: "/suporte" },
  ];

  return (
    <footer className="relative w-[1036px] h-[338px] rounded-[20px] overflow-hidden mx-auto my-5 bg-gradient-to-br from-[#030B4D] to-[#071AB3]">
      {/* Logo Section */}
      <div className="absolute top-[59px] left-[80px]">
        <Image
          src="/logo/techti-logo.svg"
          alt="TechTI Logo"
          width={150}
          height={60}
          className="object-contain w-auto"
          style={{ color: "transparent", width: "auto" }}
        />
        <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/90">
          <Link href="telefone" className="hover:text-white transition-colors">
            Contato:&nbsp;+55 (11) 95232-4566
          </Link>
          <Link href="email" className="hover:text-white transition-colors">
            contato@techtitecnologia.com.br
          </Link>
        </div>
      </div>

      {/* Navigation Section */}
      <nav
        className="absolute w-[571px] h-[154px] top-[59px] left-[365px]"
        aria-label="Footer navigation"
      >
        {/* Sobre Section */}
        <div className="w-[149px] gap-5 left-0 flex flex-col items-start absolute top-0">
          <h3 className="relative self-stretch h-[18px] mt-[-1.00px] font-semibold text-white text-[18px] tracking-[0.36px] leading-[20.6px] whitespace-nowrap">
            Sobre
          </h3>
          {aboutLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative self-stretch h-3.5 font-normal text-[#ccd6ffe6] text-[14px] tracking-[0.28px] leading-[16.0px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Soluções Section */}
        <div className="w-[119px] gap-5 left-[195px] flex flex-col items-start absolute top-0">
          <h3 className="relative self-stretch h-[18px] mt-[-1.00px] font-semibold text-white text-[18px] tracking-[0.36px] leading-[20.6px] whitespace-nowrap">
            Soluções
          </h3>
          {solutionLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative self-stretch h-3.5 font-normal text-[#ccd6ffe6] text-[14px] tracking-[0.28px] leading-[16.0px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Recursos Section - Sem título, apenas links */}
        <div className="w-[211px] gap-[25px] left-[360px] flex flex-col items-start absolute top-0">
          {policyLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative self-stretch h-[18px] mt-[-1.00px] font-semibold text-white text-[14px] tracking-[0.36px] leading-[20.6px] whitespace-nowrap hover:text-[#ccd6ffe6] transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>

      {/* Divider */}
      <div className="absolute w-[876px] h-px bg-[#344BAE] top-[238px] left-[80px]"></div>

      {/* Copyright Section */}
      <div className="absolute top-[268px] left-[80px] text-white/90 text-[14px]">
        © 2025 TechTI. Todos os direitos reservados.
      </div>

      {/* Social Media Icons Section */}
      <div className="absolute top-[268px] right-[80px] flex gap-[18px]">
        <Link
          href="https://www.facebook.com/techti.tecnologiaofc"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icons/footer/facebook.svg"
            alt="Facebook"
            width={22}
            height={22}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://www.instagram.com/techti_tecnologiaofc/"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icons/footer/instagram.svg"
            alt="Instagram"
            width={22}
            height={22}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://x.com/techtisolucoes"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icons/footer/twitter.svg"
            alt="Twitter"
            width={22}
            height={22}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/techti-tecnologia"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/icons/footer/linkedin.svg"
            alt="LinkedIn"
            width={22}
            height={22}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
