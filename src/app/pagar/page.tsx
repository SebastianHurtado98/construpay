import PayableInvoices from '@/components/payable-invoices-table'

export default function PayableInvoicesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Cuentas por pagar</h1>
      <PayableInvoices />
    </div>
  )
}