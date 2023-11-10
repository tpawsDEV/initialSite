import { DataTableDemo } from "./components/table";
import { Card } from "@/components/ui/card";
import { DatePickerWithRange } from "./components/datepicker";
import { CardsSalesList } from "./components/cardmobile";

export default function SalesPage() {
  return (
    <>
      <div className="flex-col p-4 md:p-10">
        <div className="flex mb-5">
          <h1 className="text-4xl font-semibold">Vendas</h1>
        </div>
        <div className="flex-col justify-between md:flex-row ">
          <div className="flex-col ">
            <h3 className="mb-4">Total de 6 vendas entre 20/09/2023 e 20/10/2023</h3>
            <Card className="flex p-6 w-full md:max-w-[400px]">
              <div className="flex-col">
                <h1 className="text-xl mb-2">Total de arrecadado</h1>
                <h1 className="text-3xl">R$ 2.000,00</h1>
              </div>
            </Card>
          </div>
          <div>
            
          </div>
        </div>
        
       <CardsSalesList > <DatePickerWithRange /></CardsSalesList> 
       <DataTableDemo > <DatePickerWithRange /></DataTableDemo>
        
      </div>
    </>
  );
}
