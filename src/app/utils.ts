export const extractAndDisplayText = (json: string) => {
    if (json) {
        const parsedData = JSON.parse(json);
        const blockText = parsedData.blocks[0].data.text;
        const plainText = blockText.replace(/<\/?[^>]+(>|$)/g, "");
        return plainText;
    } else {
        return null;
    }
};