export const measure = (label, exec) => {
    console.time(label || 'Performance time');
    exec();
    console.timeEnd(label || 'Performance time');
}