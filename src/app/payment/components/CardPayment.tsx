import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface CardProps {

  link: string;
  subtitle?: string;
  title: string;
  description: string;
  linkdescription: string;
}


export function CardPayment({ link, title,subtitle, description,linkdescription }: CardProps) {
  return (
    <div className="flex  justify-center items-center h-full rounded-lg shadow-lg overflow-hidden">
      <Card className="flex-col w-full p-4 md:w-[700px] md:p-10">
        <div className="flex-col">
          <h1 className="text-base flex justify-center items-center md:text-2xl">{title}</h1>
            
          <h1 className="flex justify-center items-center md:text-xl">{subtitle}<strong className="text-xl ml-1 md:text-2xl">STRIPE</strong></h1>

          <div className="w-full flex justify-center items-center">
          <img className="flex md:max-w-[400px]" src="https://i.ibb.co/FWN1dpt/stripe.png" />
          </div>
        </div>
        <h3 className="text-xs flex justify-center items-center m-2 md:text-xl">{description}</h3>
        <div className="text-center mt-4">
          <a
            href={link}>
              <Button className="bg-[#8c52ff] text-xl w-1/2  rounded-full p-0 md:max-w-[200px]">{linkdescription}</Button>
            
          </a>
        </div>
      
        

      </Card>
    </div>
  );
}