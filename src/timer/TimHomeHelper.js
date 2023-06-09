const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={}[]|\\'\"<>:;,./?";

export const allowedKeys = [...alphabet, ...alphabet.toUpperCase(), ...numbers, ...symbols, " "];

const words = [
    "aaaa",
    "aasa",
    "aada",
    "aafa",
    "aaja",
    "aaka",
    "aala",
    "aa;a",
    "asaa",
    "assa",
    "asda",
    "asfa",
    "asja",
    "aska",
    "asla",
    "as;a",
    "adaa",
    "adsa",
    "adfa",
    "adla",
    "ad;a",
    "afaa",
    "afsa",
    "afda",
    "afja",
    "afla",
    "a;fa",
    "afas",
    "afss",
    "afds",
    "afjs",
    "afls",
    "a;fs",
    "afas",
    "afss",
    "afds",
    "afjs",
    "afls",
    "a;fs",
    "ajss",
    "ajsd",
    "ajdd",
    "ajfd",
    "aj;d",
    "ajsf",
    "saaf",
    "sasf",
    "sadf",
    "saff",
    "sajf",
    "sakf",
    "salf",
    "s;af",
    "ssaf",
    "sssf",
    "ssdf",
    "ssff",
    "ssjf",
    "sskf",
    "sslf",
    "s;sf",
    "sdaf",
    "sdsf",
    "sddf",
    "sdff",
    "sdjf",
    "sdlf",
    "s;df",
    "sfaf",
    "sfsf",
    "sfdf",
    "sfjf",
    "sflf",
    "s;ff",
    "sjaj",
    "sjsj",
    "sjdj",
    "sjfj",
    "sj;j",
    "sjsj",
    "skaj",
    "sksj",
    "skdj",
    "skfj",
    "s;kj",
    "slaj",
    "slsj",
    "sldj",
    "slfj",
    "s;lj",
    "daaj",
    "dask",
    "dadk",
    "dafk",
    "dajk",
    "dalk",
    "d;ak",
    "ddak",
    "ddsk",
    "dddk",
    "ddfk",
    "ddjk",
    "ddlk",
    "d;dk",
    "dfak",
    "dfsk",
    "fddk",
    "fdfk",
    "f;dk",
    "fjak",
    "fjsk",
    "fjdk",
    "fjfk",
    "fj;k",
    "fjsk",
    "fkak",
    "fksk",
    "fkdk",
    "fkfk",
    "fk;k",
    "flak",
    "flsk",
    "fldk",
    "flfk",
    "fljk",
    "fllk",
    "f;lk",
    "jaak",
    "jask",
    "jadk",
    "jafk",
    "jajk",
    "ja;k",
    "jdak",
    "jdsk",
    "jddk",
    "jdfl",
    "jdjl",
    "jdll",
    "j;dl",
    "jfal",
    "jfsl",
    "jfdl",
    "jffl",
    "jfjl",
    "jfll",
    "j;fl",
    "jjal",
    "jjsl",
    "jjdl",
    "jjfl",
    "jjjl",
    "jj;l",
    "jjsl",
    "jkal",
    "jksl",
    "jkdl",
    "jkfl",
    "jkjl",
    "jkll",
    "j;kl",
    "jlal",
    "jlsl",
    "jldl",
    "jlfl",
    "kaal",
    "kasl",
    "kdal",
    "kdsl",
    "kddl",
    "kdfl",
    "kdjl",
    "kdlk",
    "k;dk",
    "kfak",
    "kfsk",
    "kfdk",
    "kffk",
    "kfjk",
    "kflk",
    "k;fk",
    "kjak",
    "kjsk",
    "kjd;",
    "kjf;",
    "kjj;",
    "kj;;",
    "laa;",
    "las;",
    "lda;",
    "lds;",
    "l;d;",
    "lfa;",
    "lfs;",
    "lfd;",
    "lff;",
    "l;f;",
    "lja;",
    "ljs;",
    "ljd;",
    "ljf;",
    "lj;;",
    "lla;",
    "lls;",
    "lld;",
    "llf;",
    "ll;;",
    "l;l;",
    "aaaaa",
    "aaaas",
    "aaaad",
    "aaaaf",
    "aaaaj",
    "aaaak",
    "aaaa;",
    "aasaa",
    "aasas",
    "aasad",
    "aasaf",
    "aasaj",
    "aasak",
    "aas;a",
    "aassa",
    "aasss",
    "aassd",
    "aassf",
    "aassj",
    "aassk",
    "aass;",
    "aasad",
    "aasaf",
    "aasaj",
    "aasak",
    "asdf;",
    "as;;;",
    "sdfas",
    "salad",
    "salsa",
    "jklja", "dfjks", "lkjas", "ksdfl", "lskdf", "dskfl", "lfjas", "alskj", "daklf", "flsaj", "fjdks", "skjlf", "asfkl", "fklja", "lkads", "djkla", "sdfjk", "kljas", "afsjk", "fdkas", "lksja", "dsjfk", "fklas", "klads", "djkls", "sfjka", "lasdf", "afkls", "klsaf", "saklf", "flkjs", "sjkfl", "sdfkl", "fslaj", "dlsaf", "sfjdk", "fslda", "asklf", "ljdsa", "aklsf", "jdfks", "dfkas", "klfsj", "ljask", "kslaf", "sdklf", "fsjkl", "ljfsa", "askld",
    "skdjfl", "lasjdf", "fdlksj", "jfdkls", "askldf", "falksd", "sfadlk", "skdfja", "jfslak", "dsljfk", "fjlsak", "kslafd", "lkjsda", "kldfsa", "sadfjk", "sdaklf", "flksdj", "lkfads", "jkdsal", "fdlask", "salkfd", "jdslfk", "sdflka", "dsjfkl", "sdlkfa", "dklsaf", "ldksaf", "dlsajf", "sfdkla", "klasfd", "sakjlf", "sjfdkl", "dslfka", "klasdj", "sklafd", "asljfd", "klfads", "dkslaf", "jflsda", "skdfla", "adkslf", "ajldfs", "fljsad", "sdafkl", "flakdj", "ljfdas", "fdlkas", "alfkds", "afdkls",
    


];

export function generateRandomWords() {
    const shuffled = words
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    return shuffled.join(" ");
}
