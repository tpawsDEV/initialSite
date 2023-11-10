"use client"

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import PaginationControls from "./paginationcontrols";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input"
import { SlOptions } from "react-icons/sl";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "react-day-picker";
import { DropdownMenuDemo } from "./dropdown";

interface CardProps {
  status: string;
  email: string;
  phone: string;
  date: string;
  amount: number;
}

const data: CardProps[] = [
  {
    status: "success",
    amount: 316,
    email: "ken99@yahoo.com",
    phone: "31998459949",
    date: "2021-01-01",
  },
  {
    status: "success",
    amount: 100,
    email: "lucas@yahoo.com",
    phone: "31999212319",
    date: "2021-01-01",
  },
  {
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    phone: "31988967722",
    date: "2021-01-01",
  },
  {
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    phone: "31988777735",
    date: "2021-01-01",
  },
  {
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    phone: "31999777735",
    date: "2021-01-01",
  },
  {
    status: "success",
    amount: 316,
    email: "ken99@yahoo.com",
    phone: "31998459949",
    date: "2021-01-01",
  },
  {
    status: "success",
    amount: 316,
    email: "ken99@yahoo.com",
    phone: "31998459949",
    date: "2021-01-01",
  },
  {
    status: "success",
    amount: 316,
    email: "ken99222222@yahoo.com",
    phone: "319984599492222",
    date: "2021-01-01",
  },

];

export function CardsSales({ status, email, phone, date, amount }: CardProps) {
  return (
    <div className="flex justify-center items-center h-full rounded-lg shadow-lg overflow-hidden">
      <Card className="flex-col relative w-full p-4 m-2 md:w-[700px] md:p-10">
        <div className="flex-col">
          <h3>Status: {status}</h3>
          <h3>Email: {email}</h3>
          <h3>Phone: {phone}</h3>
          <h3>Date: {date}</h3>
          <h3>Amount: {amount}</h3>
        </div>
        <div className="absolute  top-3 right-6">
          <DropdownMenuDemo />
        </div>
      </Card>
    </div>
  );
}

export function CardsSalesList({
  children
}: {
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((cardData) =>
    Object.values(cardData).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const entries = data.filter((cardData) =>
    Object.values(cardData).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // arruamr paginação
  const max = Math.min(start, (entries.length / Number(per_page)))
  const end = max + Number(per_page)

  const filteredEntries = entries.slice(max, end)

  return (
    <div className="flex-col w-full mt-2 md:hidden ">
      <div
        className='w-full mb-2 top-14 z-50 sticky backdrop-blur p-2 border-b-2 border-border'
      >
        {children}
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="mt-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredEntries.map((cardData, index) => (
        <CardsSales key={index} {...cardData} />
      ))}

      <PaginationControls
        hasNextPage={end < filteredData.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}
