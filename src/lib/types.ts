export interface ThumbnailPropsType {
    url: string;
    alt?: string;
}

export type DescriptionPropsType = {
    time: number;
    blocks:
    [
        {
            id: string;
            data: {
                text: string;
            },
            type: string;
        }
    ],
    version: string;
}

export interface NodeTypeProps {
    id: string;
    name: string;
    description: string;
    thumbnail: ThumbnailPropsType;
    pricing: {
        priceRange: {
            stop: { net: { amount: number } };
        };
        discount: number;
    };
    isAvailableForPurchase: boolean;
}

export type ProductDataType = {
    id: string;
    name: string;
    images: { url: string }[];
    description: string;
    brand: string;
    category: { name: string };
    pricing: {
        priceRange: {
            start: { gross: { amount: number } };
        };
        discount: number;
    };
    isAvailableForPurchase: boolean;
    weight: { value: number; unit: string };
};