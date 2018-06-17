export interface Book {
    title: string;
    author: string;
    description: string;
    thumbnail: string;
    date: string;
    isFavorite: boolean;
    id: string;
}

export interface VolumeQuery {
    items: Volume[];
}

export interface Volume {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        publishedDate: Date;
        description: string;
        imageLinks: { 
            thumbnail: string; 
        }
    };
}
  