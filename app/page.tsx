import { Metadata } from 'next';
import RandomLivePic from './RandomLivePic';
export const metadata: Metadata = {
    title: 'Receiver',
};
export default function Home() {
    return (
        <main id="home">
            <RandomLivePic />
        </main>
    );
}
