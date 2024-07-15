// Define the split length
const splitLength = 23

// Function to split the text if its length is 23 characters
export const splitText = text => {
    if (text.length === splitLength) {
        return [text.slice(0, splitLength), text.slice(splitLength)]
    }
    return [text]
}
