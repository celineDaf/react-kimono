
export type IPrismicImage = {
    dimensions: {
        width: number,
        height: number
    },
    url: string,
    alt: string,
    copyright: string,
};

export type IPrismicVideo = {
    width: number,
    provider_name: string,
    html: string,
    thumbnail_width: number,
    title: string,
    version: string,
    author_name: string,
    height: number,
    type: string,
    provider_url: string,
    thumbnail_height: 360,
    thumbnail_url: string,
    embed_url: string
}

export type IPrismicTitle = [
    {
        type: string,
        text: string,
        spans: []
    }
]

export type IPrismicLink = {
    name: string,
    title: string
}


