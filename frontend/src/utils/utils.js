export const trimText = (text, limit) => {
    if (text.length <= limit) return text;

    let trimmedText = text.slice(0, limit + 1);
    const lastSpaceIndex = trimmedText.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
        trimmedText = trimmedText.slice(0, lastSpaceIndex);
    }

    return trimmedText + '...';
}