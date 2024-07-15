// app/layout.js
import ClientLayout from './client-layout'

export const metadata = {
    title: 'My App',
    description: 'My Next.js 14 Application'
}

export default function RootLayout({children}) {
    return (
        <html lang='en'>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
