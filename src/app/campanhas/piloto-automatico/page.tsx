import { fetchAutoPilot } from "@/services/glutoes/marketing/api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AutoPilotCampaign from "./campaign";

export default async function AutoPilot() {
  const data = await fetchAutoPilot();
  return (
    <Table>
      <TableCaption>Campanhas de Piloto Automático</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Imagem</TableHead>
          <TableHead className="max-w-[50%]">Promoção</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Horário</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowI) => (
          <AutoPilotCampaign key={rowI} row={row} />
        ))}
      </TableBody>
    </Table>
  );
}

AutoPilot.auth = true;
