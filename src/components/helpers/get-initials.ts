export const getInitials = (value: string) => {
  const words = value.split(' ')
  const wordsCount = words.length

  return wordsCount > 1
    ? words[0].charAt(0).toLocaleUpperCase() +
        words[words.length - 1].charAt(0).toLocaleUpperCase()
    : value.slice(0, 2)
}
