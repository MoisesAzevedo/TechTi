"use client";

import React from "react";

export default function OrbitalSkills(): JSX.Element {
  return (
    <div data-name="orbital-root" className="w-full mb-60">
      <div
        data-name="orbital-container"
        className="relative w-full max-w-[999px] aspect-[999/596] mx-auto"
      >
        {/* Outer Border Circle */}
        <div
          data-name="orbital-outer-border"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46.1%] aspect-square"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 463 463"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle
              cx="231.5"
              cy="231.5"
              r="231"
              stroke="#CCD6FF"
              strokeWidth="1"
            />
          </svg>
          {/* Posiciona o item orbital sobre a borda superior do círculo externo */}
          <div
            data-name="orbital-item"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
          >
            <p
              data-name="orbital-item-text"
              className="absolute -top-[30px] left-1/2 -translate-x-1/2 text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
              style={{ fontFamily: '"Open Sauce One", sans-serif' }}
            >
              Adequação à LGPD
            </p>
          </div>
          {/* Item orbital adicional: borda direita, centro vertical */}
          <div
            data-name="orbital-item"
            className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
          >
            <p
              data-name="orbital-item-text"
              className="absolute left-full top-1/2 -translate-y-1/2 ml-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
              style={{ fontFamily: '"Open Sauce One", sans-serif' }}
            >
              Documentação do Ambiente de TI
            </p>
          </div>
          {/* Item orbital adicional: borda inferior, centro horizontal */}
          <div
            data-name="orbital-item"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
          >
            <p
              data-name="orbital-item-text"
              className="absolute top-full left-1/2 mt-[30px] -translate-x-1/2 text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
              style={{ fontFamily: '"Open Sauce One", sans-serif' }}
            >
              Segurança da Informação
            </p>
          </div>

          {/* Item orbital adicional: borda esquerda, centro vertical */}
          <div
            data-name="orbital-item"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
          >
            <p
              data-name="orbital-item-text"
              className="absolute right-full top-1/2 -translate-y-1/2 mr-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
              style={{ fontFamily: '"Open Sauce One", sans-serif' }}
            >
              Planejamento anual da TI
            </p>
          </div>
        </div>

        {/* Inner Border Circle (contains backup dot on its right) */}
        <div
          data-name="orbital-inner-border"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[33.9%] aspect-square"
        >
          <div className="relative w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 341 341"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="170.5"
                cy="170.5"
                r="170"
                stroke="#CCD6FF"
                strokeWidth="1"
              />
            </svg>

            {/* Inner-ring orbital items (diagonals: top-left, top-right, bottom-right, bottom-left) */}
            {/* Top-left diagonal */}
            <div
              data-name="orbital-item"
              className="absolute left-[14.65%] top-[14.65%] -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
            >
              <p
                data-name="orbital-item-text"
                className="absolute right-full top-1/2 -translate-y-1/2 mr-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
                style={{ fontFamily: '"Open Sauce One", sans-serif' }}
              >
                Beckup de Dados
              </p>
            </div>

            {/* Top-right diagonal */}
            <div
              data-name="orbital-item"
              className="absolute left-[85.35%] top-[14.65%] -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
            >
              <p
                data-name="orbital-item-text"
                className="absolute left-full top-1/2 -translate-y-1/2 ml-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
                style={{ fontFamily: '"Open Sauce One", sans-serif' }}
              >
                Monitoramento 24x7
              </p>
            </div>

            {/* Bottom-right diagonal */}
            <div
              data-name="orbital-item"
              className="absolute left-[85.35%] top-[85.35%] -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
            >
              <p
                data-name="orbital-item-text"
                className="absolute left-full top-1/2 -translate-y-1/2 ml-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
                style={{ fontFamily: '"Open Sauce One", sans-serif' }}
              >
                Plantão de dúvidas.
              </p>
            </div>

            {/* Bottom-left diagonal */}
            <div
              data-name="orbital-item"
              className="absolute left-[14.65%] top-[85.35%] -translate-x-1/2 -translate-y-1/2 text-center w-[30px] h-[30px] rounded-full bg-techti-green flex items-center justify-center overflow-visible"
            >
              <p
                data-name="orbital-item-text"
                className="absolute right-full top-1/2 -translate-y-1/2 mr-[30px] text-[clamp(10px,1.2vw,14px)] font-medium leading-[1.1] text-white whitespace-nowrap overflow-visible"
                style={{ fontFamily: '"Open Sauce One", sans-serif' }}
              >
                SLA eficiente
              </p>
            </div>

            {/* backup dot removed */}
          </div>
        </div>

        {/* Central Circle with Glow (only green circle kept) */}
        <div
          data-name="orbital-core"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[239px] h-[239px]"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 239 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            overflow="visible"
          >
            <defs>
              <filter
                id="orbital-core-blur"
                filterUnits="userSpaceOnUse"
                x="-120"
                y="-120"
                width="479"
                height="479"
              >
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>

            {/* Glow behind the circle (larger, blurred, same color) */}
            <circle
              cx="119.5"
              cy="119.5"
              r="129.06"
              fill="#5AFF5E"
              opacity="0.45"
              filter="url(#orbital-core-blur)"
            />

            {/* Main solid circle on top */}
            <circle cx="119.5" cy="119.5" r="119.5" fill="#5AFF5E" />
          </svg>
        </div>

        {/* Center Text */}
        <div
          data-name="orbital-center-text"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1
            data-name="orbital-center-h1"
            className="text-[clamp(24px,4vw,40px)] font-bold leading-[1.15] text-[#030B4D]"
            style={{ fontFamily: '"Open Sauce One", sans-serif' }}
          >
            Lorem
            <br />
            Ipsum
          </h1>
        </div>

        {/* Outros labels removidos; somente 'Adequação à LGPD' permanece */}
      </div>
    </div>
  );
}
