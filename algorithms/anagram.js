const isAnagram = (world1, world2) => {
    return world1.split('').sort() === world2.split('').sort();
}

isAnagram("rumo", "muro");