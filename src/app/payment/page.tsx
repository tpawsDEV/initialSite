import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card";
import { CardPayment } from "./components/CardPayment"

export default function PaymentPage() {
  const inPayment = {
    status: "incomplete",
    props: {
      link: "https://dashboard.stripe.com/register?utm_campaign=BR_pt_Search_Brand_Brand_EXA-15928713321&utm_medium=cpc&utm_source=google&ad_content=575905716902&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=CjwKCAjw7oeqBhBwEiwALyHLM3tC7UXbYgnm5Z1yslVv6D-JA6Ivx4xZl47UHH-Qairo7NbYRQzaABoCOCUQAvD_BwE",
      description: "Clique abaixo para concluir a configuração.",
      title: "Configuração de Pagamento Incompleta",
      linkdescription: "VINCULAR!",
      subtitle: 'Conecte-se com o'
    },

  }
  const payment = {
    status: "complete",
    props: {
      link: "https://dashboard.stripe.com/login",
      title: "Saque Disponível",
      subtitle: 'Conta vinculada com o',
      linkdescription: "Saque Agora!"

    }
  }

  const selected = payment;

  return (
    <>
      {/* <div className="container relative h-screen flex-col items-center justify-center grid grid-cols-1 lg:max-w-none lg:grid-cols-2 lg:px-0">
       <h1>oi</h1>
      </div> */}
      <div className="flex w-full justify-center">
        <div className="flex-col w-full p-4 justify-center items-center md:w-[700px]">
          <div className="flex  text-2xl font-bold mb-2 md:text-3xl"> Pagamentos</div>
          {/* <h3 className="text-base  mb-6 md:text-2xl">Configure para sacar.</h3> */}
          <div className="flex items-center text-green-700 text-base mb-3">
            Conta Vinculada
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div className="mb-5">
            {/* <h3 className="text-sm p-0">Infelizmente não é possível acessar este recurso no momento,uma vez que sua conta ainda não está vinculada com o Stripe. O Stripe é essencial para facilitar transações financeiras e a gestão de seus recursos. Certifique-se de conectar sua conta ao Stripe para dar continuidade.</h3> */}
          </div>
          {selected.status == "complete" && <div className="flex items-center justify center w-full">
            <div className="flex items-center justify-center w-full">
              {/* Infelizmente não é possível acessar este recurso no momento,uma vez que sua conta ainda não está vinculada com o Stripe. O Stripe é essencial para facilitar transações financeiras e a gestão de seus recursos. Certifique-se de conectar sua conta ao Stripe para dar continuidade. */}
              <CardPayment
                {...selected.props}
              />
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}
