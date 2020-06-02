export default async function json(data) {
  try {
    // эмуляция обработки ArrayBuffer
    return String.fromCharCode.apply(null, new Uint16Array(data));
  } catch (error) {
    return error;
  }
}
