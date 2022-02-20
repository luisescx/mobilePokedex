export function formatFirstLetterToUpperCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getPokemonIdByUrlString(url: string) {
  const urlList = url.split('/');
  return Number(urlList[urlList.length - 2]);
}
