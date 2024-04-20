import type { Metadata } from 'next';
import './css/screen.scss';

export const metadata: Metadata = {
    title: 'Receiver',
    description: 'ok',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
