const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";

export const allowedKeys = [...alphabet, ...alphabet.toUpperCase(), ...numbers, ...symbols, " "];

const words = [
  "ladkjas", "jasdflk", "fjkldas", "fdlkjas", "dskljaf", "slakfjd", "dslakjf", "jaskldf", "sadjklf", "fjkslda", "dkfjlas", "lkfjads", "sfdkjal", "lkdsjaf", "fjalskd", "sdfklaj", "lsadkjf", "klfjsad", "akfjsld", "adksjlf", "flakdjs", "jdsklaf", "faklsdj", "sfdlkaj", "dajslkf", "fdjksla",
  "sadfkljd", "alksjdf;", "asjlkdf;", "kjflasdj", "sdfkljaf", "lkadjfs;", "jfladks;", "dsjaklf;", "sfkjdla;", "skajfld;", "skadjlf;", "dsfkljaf", "jfkasdl;", "kafdslj;", "skdljfa;", "ajfdkls;", "sfdjkl;a", "jsfalkd;", "ladskfj;", "sajdlkf;", "fskaldj;", "jkasdlf;", "sflkjda;", "ljkdafs;", "lkjfasd;", "kflsdaj;", "dlfakjs;",
  "jladksf", "askfldj", "fjkasdl", "lksajfd", "skjdlaf", "dksjalf", "sjakdlf", "dlsjafk", "fjsalkd", "lsdjfak", "jafksdl", "sdkljaf", "fdklsja", "dslfjak", "lfkdsja", "ksfjdal", "skdfjal", "kjdflsa", "fjkslad", "dfklsaj", "lkjasdf", "sdjfkal", "ajfdlks", "skfdlaj", "fdjlask", "fsdalkj", "sdfkjal", "skjflda",
  "lafksdjl", "ajkldfs;", "dakslfj;", "fjalkds;", "dsklfja;", "lfasjkd;", "djsalkf;", "fjkslda;", "dklafsj;", "jsfdalk;", "klfadsj;", "skfladj;", "fkjasld;", "fjsdalk;", "kljfsad;", "askljfd;", "afskldj;", "ljfksda;", "ljksfad;", "jafdslk;", "skjlfad;", "fjlkads;", "adksjfl;", "sfjkald;", "jdlksaf;", "salkdjf;", "fkdjlsa;", "dsafklj;",
  "jflksdakl", "ksdajflks", "adkflsjdl", "dslkafjlk", "fajlsdklf", "ksdjalfks", "fjkasldkj", "lkafsjdkl", "lksdafjkl", "fsakldjfl", "sfjkldakl", "dsjflkask", "lkajfsdkl", "ksjldafkl", "skjfaldkl", "lksfjaldk", "dajkfkslj", "lfsjkdalk", "dfklsajdk", "fjksdlakj", "lsadkjflk", "klsjdafkl", "fdlksjakl", "sdkljafkl", "kajdlfksj", "kfsjldakl", "dskjlfakl", "fjksldakl",
  
];

export function generateRandomWords() {
  const shuffled = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled.join(" ");
}
