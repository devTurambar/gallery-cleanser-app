export interface MediaItem {
    id: string,
    name: string,
    path: string,
    size: number,
    type: 'image' | 'gif' | 'video',
    duplicate: boolean,
    spamScore: number,
    status: 'keep' | 'quarantine' | 'deleted';
}