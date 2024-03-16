export default function transformStringIntoPath(str: string) {
  return str
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();
}
