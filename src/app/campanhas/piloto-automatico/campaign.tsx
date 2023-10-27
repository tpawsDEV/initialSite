"use client";
import { Textarea } from "@/components/ui/textarea";
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function AutoPilotCampaign({ row }) {
  const [offer, setOffer] = useState(row.offer);
  const [link, setLink] = useState(row.link);
  const [lines, setLines] = useState(1);

  return (
    <TableRow>
      <TableCell className="w-[10%] font-medium">{row.title}</TableCell>
      <TableCell>Icon</TableCell>
      <TableCell className="w-[50%] transition-all">
        <Textarea
          className="transition-all min-h-0 resize-none scroll-none"
          rows={lines}
          wrap="hard"
          value={offer}
          onFocus={() => {
            setLines(10);
          }}
          onChange={(e) => {
            setOffer(e.target.value);
          }}
          onBlur={() => {
            setLines(1);
          }}
        ></Textarea>
      </TableCell>
      <TableCell className="w-[20%]">
        <Textarea
          className="transition-all min-h-0 resize-none scroll-none"
          rows={lines}
          wrap="hard"
          value={link}
          onFocus={() => {
            setLines(10);
          }}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          onBlur={() => {
            setLines(1);
          }}
        ></Textarea>
      </TableCell>
      <TableCell>20:00</TableCell>
    </TableRow>
  );
}
