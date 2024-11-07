import UserTable from '@/components/user-table'

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Usuarios</h1>
      <UserTable />
    </div>
  )
}