export interface RawShowData {
    id: number;
    attributes: {
        date: string;
        myBand: Array<{
            id: number;
            displayBandname: string;
            band: {
                data: {
                    id: number;
                    attributes: {
                        bandname: string;
                    };
                };
            };
        }>;
        doors: string;
        sound: string;
        venue: string;
        city: string;
        notes: string;
        otherBands: string;
        cancelled: boolean;
        eventLinks: Array<{
            id: number;
            url: string;
            text: string;
        }>;
        flyers: {
            data: Array<{
                id: number;
                attributes: {
                    alternativeText: string;
                    url: string;
                    formats: {
                        medium: {
                            url: string;
                        };
                    };
                };
            }>;
        };
        documentation: Array<{
            id: number;
            usable: boolean;
            credit: string;
            media: {
                data: {
                    id: number;
                    attributes: {
                        alternativeText: string;
                        mime: string;
                        url: string;
                        formats: {
                            medium: {
                                url: string;
                            };
                        };
                    };
                };
            };
        }>;
    };
}

export interface Show {
    id: number;
    bands: Array<{
        id: number;
        bandname: string;
        displayBandname: string;
    }>;
    date: string;
    shortMonth: string;
    shortDay: string;
    shortYear: string;
    shortDate: string;
    doors: string;
    sound: string;
    venue: string;
    city: string;
    notes: string;
    otherBands: string;
    cancelled: boolean;
    eventLinks: Array<{
        id: number;
        url: string;
        text: string;
    }>;
    flyers: Array<{
        id: number;
        alt: string;
        urlLarge: string;
        urlSmall: string;
    }>;
    documentation: Array<{
        id: number;
        usable: boolean;
        credit: string;
        alt: string;
        mime: string;
        urlLarge: string;
        urlSmall: string;
    }>;
}
