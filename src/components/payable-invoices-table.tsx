'use client'

import { useState, useEffect } from 'react'
import { InvoiceService } from '@/lib/services/invoice-service'
import { Invoice } from '@/lib/models/invoice'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function PayableInvoicesTable() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const fetchedInvoices = await InvoiceService.getPayableInvoices()
        setInvoices(fetchedInvoices)
      } catch (err) {
        setError('Error al cargar las facturas. Por favor, intenta de nuevo más tarde.')
        console.error('Error fetching payable invoices:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchInvoices()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Facturas por Pagar</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Lista de facturas por pagar</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Fecha de Creación</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Fecha de Vencimiento</TableHead>
              <TableHead>Proveedor</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{new Date(invoice.created_at).toLocaleDateString()}</TableCell>
                <TableCell>{invoice.amount.toFixed(2)}</TableCell>
                <TableCell>{new Date(invoice.due_date).toLocaleDateString()}</TableCell>
                <TableCell>{invoice.provider.razon_social}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Ver Detalles</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}