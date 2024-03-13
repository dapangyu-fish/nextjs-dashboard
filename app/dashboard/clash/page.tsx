import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

const InputBox = ({placeholder = "" }) => {
  return (
    <input
      placeholder={placeholder}
      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
      />
  );
};

export function Addlink() {
  return <p>Customers Page</p>;
}

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Clash</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <InputBox placeholder="Clash订阅地址. . . " />
        <Addlink />
      </div>
    </div>
  );
}