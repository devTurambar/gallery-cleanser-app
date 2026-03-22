export interface MediaItem {
    id: string,
    name: string,
    size: number,
    type: 'image' | 'gif' | 'video',
    spamScore: number,
    status: 'keep' | 'quarantine' | 'deleted';
}