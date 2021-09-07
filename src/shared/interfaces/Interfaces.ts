export interface ItemData {
    center: string;
    date_created: string;
    description: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    title: string;
}

export interface ItemLink {
    href: string;
    rel: string;
    render: string;
}

export interface Item {
    data: ItemData[];
    href: string;
    links: Link[];
}

export interface Link {
    href: string;
    prompt: string;
    rel: string;
}

export interface Collection {
    href: string;
    items: Item[];
    links: Link[];
    metadata: { total_hits: number };
    version: string;
}

export interface Data {
    collection: Collection;
}