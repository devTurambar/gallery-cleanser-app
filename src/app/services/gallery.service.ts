import { Injectable } from "@angular/core";
import { MediaItem } from "../models/media-item.model";

@Injectable({
    providedIn: 'root',
})

export class GalleryService{
    constructor(){}

    getMockedScanResults(): MediaItem[]{
        return [
            {
                id: '1',
                name: 'whatssap_meme_1.png',
                path: '/mock-media/whatsapp-meme-01.jpg',
                size: 24500,
                type: 'image',
                duplicate: false,
                spamScore: 0.94,
                status: 'quarantine'
            },
            {
                id: '2',
                name: 'funny-cat.gif',
                path: '/mock-media/funny-cat.gif',
                size: 890000,
                type: 'gif',
                duplicate: false,
                spamScore: 0.72,
                status: 'quarantine',
            },
            {
                id: '3',
                name: 'IMG_1204.PNG',
                path: '/mock-media/IMG_1204.PNG',
                size: 180000,
                type: 'image',
                duplicate: true,
                spamScore: 0.18,
                status: 'quarantine',
            },
            {
                id: '4',
                name: 'family-photo.jpg',
                path: '/mock-media/family-photo.jpg',
                size: 3200000,
                type: 'image',
                duplicate: false,
                spamScore: 0.03,
                status: 'quarantine',
            },
        ]
    }
}