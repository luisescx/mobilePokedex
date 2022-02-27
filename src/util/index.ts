export function formatFirstLetterToUpperCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getPokemonIdByUrlString(url: string) {
  const urlList = url.split('/');
  return Number(urlList[urlList.length - 2]);
}

export function formatPokemonNumber(pkNumber: number) {
  return String(pkNumber).length >= 3
    ? pkNumber
    : String(pkNumber).length === 2
    ? `0${pkNumber}`
    : `00${pkNumber}`;
}

export function removeBreakLines(text: string) {
  return text.replace(/(\r\n|\n|\r|\f)/gm, ' ');
}
