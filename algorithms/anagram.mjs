import { factorial } from '../utils/math.mjs'

const isAnagram = (word1, word2) => {
    return word1.split('').sort().toString() === word2.split('').sort().toString();
}

isAnagram("rumo", "muro");