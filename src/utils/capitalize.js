const capitalize = (word) => {
    return word
        .toLowerCase()
        .replace(/\w/, (firstLetter) => firstLetter.toUpperCase())
}
