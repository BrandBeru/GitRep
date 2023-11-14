import { Header } from '@components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='min-h-full'>
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:first-letter:px-6">{children}</div>
        </main>
      </div>
    </>
  )
}
