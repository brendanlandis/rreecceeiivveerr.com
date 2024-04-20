'use client';
import useAxios from 'axios-hooks';
import { Show, RawShowData } from '@/app/types';
import { GetShowDetails } from './GetShowDetails';

export default function RandomLivePic() {
    const [{ data: shows, loading, error }, refetch] = useAxios(
        'https://api.slownames.net/api/shows?populate=deep,3&filters[myBand][band][id]=42&pagination[pageSize]=999'
    );

    if (loading) return <p>loading photos...</p>;
    if (error) return <p>error {JSON.stringify(error, null, 2)}</p>;

    const formatShows = (shows: { data: RawShowData[] }): Show[] => {
        return shows.data.map(GetShowDetails);
    };

    const formattedShows = shows ? formatShows(shows) : [];

    const getRandomDocument = (show: Show, selectedDocumentIds: Set<number>): Show | undefined => {
        const usableImageDocuments = show.documentation.filter(
            (doc) => doc.usable && doc.mime.includes('image') && !selectedDocumentIds.has(doc.id)
        );

        return usableImageDocuments.length > 0
            ? {
                  ...show,
                  documentation: [usableImageDocuments[Math.floor(Math.random() * usableImageDocuments.length)]],
              }
            : undefined;
    };

    const getRandomDocuments = (): Show[] => {
        const selectedDocumentIds = new Set<number>();
        const selectedShowIds = new Set<number>();
        const selectedShows: Show[] = [];

        while (selectedDocumentIds.size < 3) {
            const randomShow = formattedShows[Math.floor(Math.random() * formattedShows.length)];

            // Avoid selecting the same show again
            if (!selectedShowIds.has(randomShow.id)) {
                const randomDocument = getRandomDocument(randomShow, selectedDocumentIds);

                if (randomDocument) {
                    const selectedDocumentId = randomDocument.documentation[0].id;
                    selectedDocumentIds.add(selectedDocumentId);
                    selectedShowIds.add(randomShow.id);
                    selectedShows.push(randomDocument);
                }
            }
        }

        return selectedShows;
    };

    const randomDocuments = getRandomDocuments();

    return (
        <div className="images">
            {randomDocuments.map((randomDocument, index) => (
                <div key={index} className="image">
                    {/* <pre>{JSON.stringify(randomDocument, null, 2)}</pre> */}
                    <img src={randomDocument.documentation[0].urlLarge} alt={randomDocument.documentation[0].alt} />
                    <p>
                        {randomDocument.bands[0].displayBandname ? (
                            <>{randomDocument.bands[0].displayBandname} in </>
                        ) : (
                            randomDocument.bands[0].bandname && <>{randomDocument.bands[0].bandname} in </>
                        )}
                        {randomDocument.city} ({randomDocument.shortYear})
                    </p>
                    {randomDocument.documentation[0].credit && (
                        <p className="credit">photo by {randomDocument.documentation[0].credit}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
