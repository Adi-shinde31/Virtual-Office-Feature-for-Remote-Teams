import { v4 as uuid } from 'uuid';
import { io } from 'socket.io-client'

const storedId = localStorage.getItem('character_id') || uuid();
localStorage.setItem('character_id', storedId);
export const CHARACTER_IMAGE_SIZE = 32;

export const CHARACTER_CLASSES_MAP = {
    ENGINEER: {
        icon: { sx: 0, sy: 0 },
        portrait: { sx: 0, sy: 240 },
        className: 'ENGINEER',
        spriteImage: 'assets/characters/characters.png',
    },
};

export const MY_CHARACTER_INIT_CONFIG = {
    name: 'Amanda',
    id: storedId,
    position: { x: 12, y: 12 },
    characterClass: 'ENGINEER',
};