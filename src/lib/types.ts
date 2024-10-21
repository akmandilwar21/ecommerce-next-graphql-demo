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
}