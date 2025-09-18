import React from "react";
import { CaseItem } from "./types";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  items: CaseItem[];
}

const CasesList: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="p-1">
          <Card className="border-none shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] bg-[#ffffff]">
            <CardContent className="flex aspect-square items-center justify-center p-6 w-[199px] h-[112px]">
              {/* Preferimos usar img padrão para maior compatibilidade com assets em public/ */}
              <img src={item.src} alt={item.alt ?? item.id} className="max-w-[90%] max-h-[80%] object-contain" />
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CasesList;
