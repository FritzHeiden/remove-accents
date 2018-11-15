function removeAccents (text) {
  if (!text) return text

  let result = ''
  for (let i = 0; i < text.length; i++) {
    result += removeAccent(text[i])
  }
  return result
}

function removeAccent (char) {
  switch (char) {
    case 'A':
      return 'A'
    case 'B':
      return 'B'
    case 'C':
      return 'C'
    case 'D':
      return 'D'
    case 'E':
      return 'E'
    case 'F':
      return 'F'
    case 'G':
      return 'G'
    case 'H':
      return 'H'
    case 'I':
      return 'I'
    case 'J':
      return 'J'
    case 'K':
      return 'K'
    case 'L':
      return 'L'
    case 'M':
      return 'M'
    case 'N':
      return 'N'
    case 'O':
      return 'O'
    case 'P':
      return 'P'
    case 'Q':
      return 'Q'
    case 'R':
      return 'R'
    case 'S':
      return 'S'
    case 'T':
      return 'T'
    case 'U':
      return 'U'
    case 'V':
      return 'V'
    case 'W':
      return 'W'
    case 'X':
      return 'X'
    case 'Y':
      return 'Y'
    case 'Z':
      return 'Z'
    case 'a':
      return 'a'
    case 'b':
      return 'b'
    case 'c':
      return 'c'
    case 'd':
      return 'd'
    case 'e':
      return 'e'
    case 'f':
      return 'f'
    case 'g':
      return 'g'
    case 'h':
      return 'h'
    case 'i':
      return 'i'
    case 'j':
      return 'j'
    case 'k':
      return 'k'
    case 'l':
      return 'l'
    case 'm':
      return 'm'
    case 'n':
      return 'n'
    case 'o':
      return 'o'
    case 'p':
      return 'p'
    case 'q':
      return 'q'
    case 'r':
      return 'r'
    case 's':
      return 's'
    case 't':
      return 't'
    case 'u':
      return 'u'
    case 'v':
      return 'v'
    case 'w':
      return 'w'
    case 'x':
      return 'x'
    case 'y':
      return 'y'
    case 'z':
      return 'z'
    case 'À':
      return 'A'
    case 'Á':
      return 'A'
    case 'Â':
      return 'A'
    case 'Ã':
      return 'A'
    case 'Ä':
      return 'A'
    case 'Å':
      return 'A'
    case 'Æ':
      return 'AE'
    case 'Ç':
      return 'C'
    case 'È':
      return 'E'
    case 'É':
      return 'E'
    case 'Ê':
      return 'E'
    case 'Ë':
      return 'E'
    case 'Ì':
      return 'I'
    case 'Í':
      return 'I'
    case 'Î':
      return 'I'
    case 'Ï':
      return 'I'
    case 'Ð':
      return 'D'
    case 'Ñ':
      return 'N'
    case 'Ò':
      return 'O'
    case 'Ó':
      return 'O'
    case 'Ô':
      return 'O'
    case 'Õ':
      return 'O'
    case 'Ö':
      return 'O'
    case 'Ø':
      return 'O'
    case 'Ù':
      return 'U'
    case 'Ú':
      return 'U'
    case 'Û':
      return 'U'
    case 'Ü':
      return 'U'
    case 'Ý':
      return 'Y'
    case 'ß':
      return 'ss'
    case 'à':
      return 'a'
    case 'á':
      return 'a'
    case 'â':
      return 'a'
    case 'ã':
      return 'a'
    case 'ä':
      return 'a'
    case 'å':
      return 'a'
    case 'æ':
      return 'ae'
    case 'ç':
      return 'c'
    case 'è':
      return 'e'
    case 'é':
      return 'e'
    case 'ê':
      return 'e'
    case 'ë':
      return 'e'
    case 'ì':
      return 'i'
    case 'í':
      return 'i'
    case 'î':
      return 'i'
    case 'ï':
      return 'i'
    case 'ð':
      return 'd'
    case 'ñ':
      return 'n'
    case 'ò':
      return 'o'
    case 'ó':
      return 'o'
    case 'ô':
      return 'o'
    case 'õ':
      return 'o'
    case 'ö':
      return 'o'
    case 'ø':
      return 'o'
    case 'ù':
      return 'u'
    case 'ú':
      return 'u'
    case 'û':
      return 'u'
    case 'ü':
      return 'u'
    case 'ý':
      return 'y'
    case 'ÿ':
      return 'y'
    case 'Ā':
      return 'A'
    case 'ā':
      return 'a'
    case 'Ă':
      return 'A'
    case 'ă':
      return 'a'
    case 'Ą':
      return 'A'
    case 'ą':
      return 'a'
    case 'Ć':
      return 'C'
    case 'ć':
      return 'c'
    case 'Ĉ':
      return 'C'
    case 'ĉ':
      return 'c'
    case 'Ċ':
      return 'C'
    case 'ċ':
      return 'c'
    case 'Č':
      return 'C'
    case 'č':
      return 'c'
    case 'Ď':
      return 'D'
    case 'ď':
      return 'd'
    case 'Đ':
      return 'D'
    case 'đ':
      return 'd'
    case 'Ē':
      return 'E'
    case 'ē':
      return 'e'
    case 'Ĕ':
      return 'E'
    case 'ĕ':
      return 'e'
    case 'Ė':
      return 'E'
    case 'ė':
      return 'e'
    case 'Ę':
      return 'E'
    case 'ę':
      return 'e'
    case 'Ě':
      return 'E'
    case 'ě':
      return 'e'
    case 'Ĝ':
      return 'G'
    case 'ĝ':
      return 'g'
    case 'Ğ':
      return 'G'
    case 'ğ':
      return 'g'
    case 'Ġ':
      return 'G'
    case 'ġ':
      return 'g'
    case 'Ģ':
      return 'G'
    case 'ģ':
      return 'g'
    case 'Ĥ':
      return 'H'
    case 'ĥ':
      return 'h'
    case 'Ħ':
      return 'H'
    case 'ħ':
      return 'h'
    case 'Ĩ':
      return 'I'
    case 'ĩ':
      return 'i'
    case 'Ī':
      return 'I'
    case 'ī':
      return 'i'
    case 'Ĭ':
      return 'I'
    case 'ĭ':
      return 'i'
    case 'Į':
      return 'I'
    case 'į':
      return 'i'
    case 'İ':
      return 'I'
    case 'ı':
      return 'i'
    case 'Ĳ':
      return 'IJ'
    case 'ĳ':
      return 'ij'
    case 'Ĵ':
      return 'J'
    case 'ĵ':
      return 'j'
    case 'Ķ':
      return 'K'
    case 'ķ':
      return 'k'
    case 'ĸ':
      return 'K'
    case 'Ĺ':
      return 'L'
    case 'ĺ':
      return 'l'
    case 'Ļ':
      return 'L'
    case 'ļ':
      return 'l'
    case 'Ľ':
      return 'L'
    case 'ľ':
      return 'l'
    case 'Ŀ':
      return 'L'
    case 'ŀ':
      return 'l'
    case 'Ł':
      return 'L'
    case 'ł':
      return 'l'
    case 'Ń':
      return 'N'
    case 'ń':
      return 'n'
    case 'Ņ':
      return 'N'
    case 'ņ':
      return 'n'
    case 'Ň':
      return 'N'
    case 'ň':
      return 'n'
    case 'Ŋ':
      return 'N'
    case 'ŋ':
      return 'n'
    case 'Ō':
      return 'O'
    case 'ō':
      return 'o'
    case 'Ŏ':
      return 'O'
    case 'ŏ':
      return 'o'
    case 'Ő':
      return 'O'
    case 'ő':
      return 'o'
    case 'Œ':
      return 'OE'
    case 'œ':
      return 'oe'
    case 'Ŕ':
      return 'R'
    case 'ŕ':
      return 'r'
    case 'Ŗ':
      return 'R'
    case 'ŗ':
      return 'r'
    case 'Ř':
      return 'R'
    case 'ř':
      return 'r'
    case 'Ś':
      return 'S'
    case 'ś':
      return 's'
    case 'Ŝ':
      return 'S'
    case 'ŝ':
      return 's'
    case 'Ş':
      return 'S'
    case 'ş':
      return 's'
    case 'Š':
      return 'S'
    case 'š':
      return 's'
    case 'Ţ':
      return 'T'
    case 'ţ':
      return 't'
    case 'Ť':
      return 'T'
    case 'ť':
      return 't'
    case 'Ŧ':
      return 'T'
    case 'ŧ':
      return 't'
    case 'Ũ':
      return 'U'
    case 'ũ':
      return 'u'
    case 'Ū':
      return 'U'
    case 'ū':
      return 'u'
    case 'Ŭ':
      return 'U'
    case 'ŭ':
      return 'u'
    case 'Ů':
      return 'U'
    case 'ů':
      return 'u'
    case 'Ű':
      return 'U'
    case 'ű':
      return 'u'
    case 'Ų':
      return 'U'
    case 'ų':
      return 'u'
    case 'Ŵ':
      return 'W'
    case 'ŵ':
      return 'w'
    case 'Ŷ':
      return 'Y'
    case 'ŷ':
      return 'y'
    case 'Ÿ':
      return 'Y'
    case 'Ź':
      return 'Z'
    case 'ź':
      return 'z'
    case 'Ż':
      return 'Z'
    case 'ż':
      return 'z'
    case 'Ž':
      return 'Z'
    case 'ž':
      return 'z'
    case 'ſ':
      return 's'
    case 'ƀ':
      return 'b'
    case 'Ɓ':
      return 'B'
    case 'Ƃ':
      return 'B'
    case 'ƃ':
      return 'b'
    case 'Ƅ':
      return 'b'
    case 'ƅ':
      return 'b'
    case 'Ɔ':
      return 'O'
    case 'Ƈ':
      return 'C'
    case 'ƈ':
      return 'c'
    case 'Ɖ':
      return 'D'
    case 'Ɗ':
      return 'D'
    case 'Ƌ':
      return 'D'
    case 'ƌ':
      return 'd'
    case 'Ǝ':
      return 'E'
    case 'Ɛ':
      return 'E'
    case 'Ƒ':
      return 'F'
    case 'ƒ':
      return 'f'
    case 'Ɠ':
      return 'G'
    case 'ƕ':
      return 'hv'
    case 'Ɨ':
      return 'I'
    case 'Ƙ':
      return 'K'
    case 'ƙ':
      return 'k'
    case 'ƚ':
      return 'l'
    case 'Ɯ':
      return 'M'
    case 'Ɲ':
      return 'N'
    case 'ƞ':
      return 'n'
    case 'Ɵ':
      return 'O'
    case 'Ơ':
      return 'O'
    case 'ơ':
      return 'o'
    case 'Ƣ':
      return 'OI'
    case 'ƣ':
      return 'oi'
    case 'Ƥ':
      return 'P'
    case 'ƥ':
      return 'p'
    case 'Ʀ':
      return 'YR'
    case 'Ƨ':
      return 'S'
    case 'ƨ':
      return 's'
    case 'Ʃ':
      return 'E'
    case 'ƫ':
      return 't'
    case 'Ƭ':
      return 'T'
    case 'ƭ':
      return 't'
    case 'Ʈ':
      return 'T'
    case 'Ư':
      return 'U'
    case 'ư':
      return 'u'
    case 'Ʋ':
      return 'V'
    case 'Ƴ':
      return 'Y'
    case 'ƴ':
      return 'y'
    case 'Ƶ':
      return 'Z'
    case 'ƶ':
      return 'z'
    case 'Ʒ':
      return 'z'
    case 'Ƹ':
      return 'z'
    case 'ƹ':
      return 'z'
    case 'ƺ':
      return 'z'
    case 'Ǆ':
      return 'DZ'
    case 'ǅ':
      return 'd'
    case 'ǆ':
      return 'dz'
    case 'Ǉ':
      return 'LJ'
    case 'ǈ':
      return 'l'
    case 'ǉ':
      return 'lj'
    case 'Ǌ':
      return 'NJ'
    case 'ǋ':
      return 'n'
    case 'ǌ':
      return 'nj'
    case 'Ǎ':
      return 'A'
    case 'ǎ':
      return 'a'
    case 'Ǐ':
      return 'I'
    case 'ǐ':
      return 'i'
    case 'Ǒ':
      return 'O'
    case 'ǒ':
      return 'o'
    case 'Ǔ':
      return 'U'
    case 'ǔ':
      return 'u'
    case 'Ǖ':
      return 'U'
    case 'ǖ':
      return 'u'
    case 'Ǘ':
      return 'U'
    case 'ǘ':
      return 'u'
    case 'Ǚ':
      return 'U'
    case 'ǚ':
      return 'u'
    case 'Ǜ':
      return 'U'
    case 'ǜ':
      return 'u'
    case 'ǝ':
      return 'e'
    case 'Ǟ':
      return 'A'
    case 'ǟ':
      return 'a'
    case 'Ǡ':
      return 'A'
    case 'ǡ':
      return 'a'
    case 'Ǣ':
      return 'AE'
    case 'ǣ':
      return 'ae'
    case 'Ǥ':
      return 'G'
    case 'ǥ':
      return 'g'
    case 'Ǧ':
      return 'G'
    case 'ǧ':
      return 'g'
    case 'Ǩ':
      return 'K'
    case 'ǩ':
      return 'k'
    case 'Ǫ':
      return 'O'
    case 'ǫ':
      return 'o'
    case 'Ǭ':
      return 'O'
    case 'ǭ':
      return 'o'
    case 'Ǯ':
      return 'z'
    case 'ǯ':
      return 'z'
    case 'ǰ':
      return 'j'
    case 'Ǳ':
      return 'DZ'
    case 'ǲ':
      return 'd'
    case 'ǳ':
      return 'dz'
    case 'Ǵ':
      return 'G'
    case 'ǵ':
      return 'g'
    case 'Ǹ':
      return 'N'
    case 'ǹ':
      return 'n'
    case 'Ǻ':
      return 'A'
    case 'ǻ':
      return 'a'
    case 'Ǽ':
      return 'AE'
    case 'ǽ':
      return 'ae'
    case 'Ǿ':
      return 'O'
    case 'ǿ':
      return 'o'
    case 'Ȁ':
      return 'A'
    case 'ȁ':
      return 'a'
    case 'Ȃ':
      return 'A'
    case 'ȃ':
      return 'a'
    case 'Ȅ':
      return 'E'
    case 'ȅ':
      return 'e'
    case 'Ȇ':
      return 'E'
    case 'ȇ':
      return 'e'
    case 'Ȉ':
      return 'I'
    case 'ȉ':
      return 'i'
    case 'Ȋ':
      return 'I'
    case 'ȋ':
      return 'i'
    case 'Ȍ':
      return 'O'
    case 'ȍ':
      return 'o'
    case 'Ȏ':
      return 'O'
    case 'ȏ':
      return 'o'
    case 'Ȑ':
      return 'R'
    case 'ȑ':
      return 'r'
    case 'Ȓ':
      return 'R'
    case 'ȓ':
      return 'r'
    case 'Ȕ':
      return 'U'
    case 'ȕ':
      return 'u'
    case 'Ȗ':
      return 'U'
    case 'ȗ':
      return 'u'
    case 'Ș':
      return 'S'
    case 'ș':
      return 's'
    case 'Ț':
      return 'T'
    case 'ț':
      return 't'
    case 'Ȟ':
      return 'H'
    case 'ȟ':
      return 'h'
    case 'Ƞ':
      return 'N'
    case 'ȡ':
      return 'd'
    case 'Ȣ':
      return 'OU'
    case 'ȣ':
      return 'ou'
    case 'Ȥ':
      return 'Z'
    case 'ȥ':
      return 'z'
    case 'Ȧ':
      return 'A'
    case 'ȧ':
      return 'a'
    case 'Ȩ':
      return 'E'
    case 'ȩ':
      return 'e'
    case 'Ȫ':
      return 'O'
    case 'ȫ':
      return 'o'
    case 'Ȭ':
      return 'O'
    case 'ȭ':
      return 'o'
    case 'Ȯ':
      return 'O'
    case 'ȯ':
      return 'o'
    case 'Ȱ':
      return 'O'
    case 'ȱ':
      return 'o'
    case 'Ȳ':
      return 'Y'
    case 'ȳ':
      return 'y'
    case 'ȴ':
      return 'l'
    case 'ȵ':
      return 'n'
    case 'ȶ':
      return 't'
    case 'ȷ':
      return 'j'
    case 'ȸ':
      return 'db'
    case 'ȹ':
      return 'qp'
    case 'Ⱥ':
      return 'A'
    case 'Ȼ':
      return 'C'
    case 'ȼ':
      return 'c'
    case 'Ƚ':
      return 'L'
    case 'Ⱦ':
      return 'T'
    case 'ȿ':
      return 's'
    case 'ɀ':
      return 'z'
    case 'Ƀ':
      return 'B'
    case 'Ʉ':
      return 'U'
    case 'Ʌ':
      return 'V'
    case 'Ɇ':
      return 'E'
    case 'ɇ':
      return 'e'
    case 'Ɉ':
      return 'J'
    case 'ɉ':
      return 'j'
    case 'Ɋ':
      return 'Q'
    case 'ɋ':
      return 'q'
    case 'Ɍ':
      return 'R'
    case 'ɍ':
      return 'r'
    case 'Ɏ':
      return 'Y'
    case 'ɏ':
      return 'y'
    case 'ɐ':
      return 'a'
    case 'ɓ':
      return 'b'
    case 'ɔ':
      return 'o'
    case 'ɕ':
      return 'c'
    case 'ɖ':
      return 'd'
    case 'ɗ':
      return 'd'
    case 'ɘ':
      return 'e'
    case 'ɛ':
      return 'e'
    case 'ɜ':
      return 'e'
    case 'ɝ':
      return 'e'
    case 'ɞ':
      return 'e'
    case 'ɟ':
      return 'j'
    case 'ɠ':
      return 'g'
    case 'ɡ':
      return 'g'
    case 'ɢ':
      return 'g'
    case 'ɥ':
      return 'h'
    case 'ɦ':
      return 'h'
    case 'ɨ':
      return 'i'
    case 'ɪ':
      return 'i'
    case 'ɫ':
      return 'l'
    case 'ɬ':
      return 'l'
    case 'ɭ':
      return 'l'
    case 'ɯ':
      return 'm'
    case 'ɰ':
      return 'm'
    case 'ɱ':
      return 'm'
    case 'ɲ':
      return 'n'
    case 'ɳ':
      return 'n'
    case 'ɴ':
      return 'n'
    case 'ɵ':
      return 'o'
    case 'ɶ':
      return 'oe'
    case 'ɸ':
      return 'o'
    case 'ɹ':
      return 'r'
    case 'ɺ':
      return 'r'
    case 'ɻ':
      return 'r'
    case 'ɼ':
      return 'r'
    case 'ɽ':
      return 'r'
    case 'ɾ':
      return 'r'
    case 'ɿ':
      return 'r'
    case 'ʀ':
      return 'r'
    case 'ʁ':
      return 'r'
    case 'ʂ':
      return 's'
    case 'ʃ':
      return 's'
    case 'ʄ':
      return 'f'
    case 'ʅ':
      return 's'
    case 'ʆ':
      return 's'
    case 'ʇ':
      return 't'
    case 'ʈ':
      return 't'
    case 'ʉ':
      return 'u'
    case 'ʋ':
      return 'v'
    case 'ʌ':
      return 'v'
    case 'ʍ':
      return 'w'
    case 'ʎ':
      return 'y'
    case 'ʏ':
      return 'y'
    case 'ʐ':
      return 'z'
    case 'ʑ':
      return 'z'
    case 'ʒ':
      return 'z'
    case 'ʓ':
      return 'z'
    case 'ʗ':
      return 'C'
    case 'ʙ':
      return 'b'
    case 'ʚ':
      return 'e'
    case 'ʛ':
      return 'g'
    case 'ʜ':
      return 'h'
    case 'ʝ':
      return 'j'
    case 'ʞ':
      return 'k'
    case 'ʟ':
      return 'l'
    case 'ʠ':
      return 'q'
    case 'ʣ':
      return 'dz'
    case 'ʥ':
      return 'dz'
    case 'ʦ':
      return 'ts'
    case 'ʨ':
      return 'tc'
    case 'ʪ':
      return 'ls'
    case 'ʫ':
      return 'lz'
    case 'ʮ':
      return 'h'
    case 'ʯ':
      return 'h'
    case 'ʰ':
      return 'h'
    case 'ʱ':
      return 'h'
    case 'ʲ':
      return 'j'
    case 'ʳ':
      return 'r'
    case 'ʴ':
      return 'r'
    case 'ʵ':
      return 'r'
    case 'ʶ':
      return 'r'
    case 'ʷ':
      return 'w'
    case 'ʸ':
      return 'y'
    case 'ͣ':
      return 'a'
    case 'ͤ':
      return 'e'
    case 'ͥ':
      return 'i'
    case 'ͦ':
      return 'o'
    case 'ͧ':
      return 'u'
    case 'ͨ':
      return 'c'
    case 'ͩ':
      return 'd'
    case 'ͪ':
      return 'h'
    case 'ͫ':
      return 'm'
    case 'ͬ':
      return 'r'
    case 'ͭ':
      return 't'
    case 'ͮ':
      return 'v'
    case 'ͯ':
      return 'x'
    case 'Ḁ':
      return 'A'
    case 'ḁ':
      return 'a'
    case 'Ḃ':
      return 'B'
    case 'ḃ':
      return 'b'
    case 'Ḅ':
      return 'B'
    case 'ḅ':
      return 'b'
    case 'Ḇ':
      return 'B'
    case 'ḇ':
      return 'b'
    case 'Ḉ':
      return 'C'
    case 'ḉ':
      return 'c'
    case 'Ḋ':
      return 'D'
    case 'ḋ':
      return 'd'
    case 'Ḍ':
      return 'D'
    case 'ḍ':
      return 'd'
    case 'Ḏ':
      return 'D'
    case 'ḏ':
      return 'd'
    case 'Ḑ':
      return 'D'
    case 'ḑ':
      return 'd'
    case 'Ḓ':
      return 'D'
    case 'ḓ':
      return 'd'
    case 'Ḕ':
      return 'E'
    case 'ḕ':
      return 'e'
    case 'Ḗ':
      return 'E'
    case 'ḗ':
      return 'e'
    case 'Ḙ':
      return 'E'
    case 'ḙ':
      return 'e'
    case 'Ḛ':
      return 'E'
    case 'ḛ':
      return 'e'
    case 'Ḝ':
      return 'E'
    case 'ḝ':
      return 'e'
    case 'Ḟ':
      return 'F'
    case 'ḟ':
      return 'f'
    case 'Ḡ':
      return 'G'
    case 'ḡ':
      return 'g'
    case 'Ḣ':
      return 'H'
    case 'ḣ':
      return 'h'
    case 'Ḥ':
      return 'H'
    case 'ḥ':
      return 'h'
    case 'Ḧ':
      return 'H'
    case 'ḧ':
      return 'h'
    case 'Ḩ':
      return 'H'
    case 'ḩ':
      return 'h'
    case 'Ḫ':
      return 'H'
    case 'ḫ':
      return 'h'
    case 'Ḭ':
      return 'I'
    case 'ḭ':
      return 'i'
    case 'Ḯ':
      return 'I'
    case 'ḯ':
      return 'i'
    case 'Ḱ':
      return 'K'
    case 'ḱ':
      return 'k'
    case 'Ḳ':
      return 'K'
    case 'ḳ':
      return 'k'
    case 'Ḵ':
      return 'K'
    case 'ḵ':
      return 'k'
    case 'Ḷ':
      return 'L'
    case 'ḷ':
      return 'l'
    case 'Ḹ':
      return 'L'
    case 'ḹ':
      return 'l'
    case 'Ḻ':
      return 'L'
    case 'ḻ':
      return 'l'
    case 'Ḽ':
      return 'L'
    case 'ḽ':
      return 'l'
    case 'Ḿ':
      return 'M'
    case 'ḿ':
      return 'm'
    case 'Ṁ':
      return 'M'
    case 'ṁ':
      return 'm'
    case 'Ṃ':
      return 'M'
    case 'ṃ':
      return 'm'
    case 'Ṅ':
      return 'N'
    case 'ṅ':
      return 'n'
    case 'Ṇ':
      return 'N'
    case 'ṇ':
      return 'n'
    case 'Ṉ':
      return 'N'
    case 'ṉ':
      return 'n'
    case 'Ṋ':
      return 'N'
    case 'ṋ':
      return 'n'
    case 'Ṍ':
      return 'O'
    case 'ṍ':
      return 'o'
    case 'Ṏ':
      return 'O'
    case 'ṏ':
      return 'o'
    case 'Ṑ':
      return 'O'
    case 'ṑ':
      return 'o'
    case 'Ṓ':
      return 'O'
    case 'ṓ':
      return 'o'
    case 'Ṕ':
      return 'P'
    case 'ṕ':
      return 'p'
    case 'Ṗ':
      return 'P'
    case 'ṗ':
      return 'p'
    case 'Ṙ':
      return 'R'
    case 'ṙ':
      return 'r'
    case 'Ṛ':
      return 'R'
    case 'ṛ':
      return 'r'
    case 'Ṝ':
      return 'R'
    case 'ṝ':
      return 'r'
    case 'Ṟ':
      return 'R'
    case 'ṟ':
      return 'r'
    case 'Ṡ':
      return 'S'
    case 'ṡ':
      return 's'
    case 'Ṣ':
      return 'S'
    case 'ṣ':
      return 's'
    case 'Ṥ':
      return 'S'
    case 'ṥ':
      return 's'
    case 'Ṧ':
      return 'S'
    case 'ṧ':
      return 's'
    case 'Ṩ':
      return 'S'
    case 'ṩ':
      return 's'
    case 'Ṫ':
      return 'T'
    case 'ṫ':
      return 't'
    case 'Ṭ':
      return 'T'
    case 'ṭ':
      return 't'
    case 'Ṯ':
      return 'T'
    case 'ṯ':
      return 't'
    case 'Ṱ':
      return 'T'
    case 'ṱ':
      return 't'
    case 'Ṳ':
      return 'U'
    case 'ṳ':
      return 'u'
    case 'Ṵ':
      return 'U'
    case 'ṵ':
      return 'u'
    case 'Ṷ':
      return 'U'
    case 'ṷ':
      return 'u'
    case 'Ṹ':
      return 'U'
    case 'ṹ':
      return 'u'
    case 'Ṻ':
      return 'U'
    case 'ṻ':
      return 'u'
    case 'Ṽ':
      return 'V'
    case 'ṽ':
      return 'v'
    case 'Ṿ':
      return 'V'
    case 'ṿ':
      return 'v'
    case 'Ẁ':
      return 'W'
    case 'ẁ':
      return 'w'
    case 'Ẃ':
      return 'W'
    case 'ẃ':
      return 'w'
    case 'Ẅ':
      return 'W'
    case 'ẅ':
      return 'w'
    case 'Ẇ':
      return 'W'
    case 'ẇ':
      return 'w'
    case 'Ẉ':
      return 'W'
    case 'ẉ':
      return 'w'
    case 'Ẋ':
      return 'X'
    case 'ẋ':
      return 'x'
    case 'Ẍ':
      return 'X'
    case 'ẍ':
      return 'x'
    case 'Ẏ':
      return 'Y'
    case 'ẏ':
      return 'y'
    case 'Ẑ':
      return 'Z'
    case 'ẑ':
      return 'z'
    case 'Ẓ':
      return 'Z'
    case 'ẓ':
      return 'z'
    case 'Ẕ':
      return 'Z'
    case 'ẕ':
      return 'z'
    case 'ẖ':
      return 'h'
    case 'ẗ':
      return 't'
    case 'ẘ':
      return 'w'
    case 'ẙ':
      return 'y'
    case 'ẚ':
      return 'a'
    case 'ẛ':
      return 's'
    case 'ẜ':
      return 's'
    case 'ẝ':
      return 's'
    case 'ẞ':
      return 'SS'
    case 'Ạ':
      return 'A'
    case 'ạ':
      return 'a'
    case 'Ả':
      return 'A'
    case 'ả':
      return 'a'
    case 'Ấ':
      return 'A'
    case 'ấ':
      return 'a'
    case 'Ầ':
      return 'A'
    case 'ầ':
      return 'a'
    case 'Ẩ':
      return 'A'
    case 'ẩ':
      return 'a'
    case 'Ẫ':
      return 'A'
    case 'ẫ':
      return 'a'
    case 'Ậ':
      return 'A'
    case 'ậ':
      return 'a'
    case 'Ắ':
      return 'A'
    case 'ắ':
      return 'a'
    case 'Ằ':
      return 'A'
    case 'ằ':
      return 'a'
    case 'Ẳ':
      return 'A'
    case 'ẳ':
      return 'a'
    case 'Ẵ':
      return 'A'
    case 'ẵ':
      return 'a'
    case 'Ặ':
      return 'A'
    case 'ặ':
      return 'a'
    case 'Ẹ':
      return 'E'
    case 'ẹ':
      return 'e'
    case 'Ẻ':
      return 'E'
    case 'ẻ':
      return 'e'
    case 'Ẽ':
      return 'E'
    case 'ẽ':
      return 'e'
    case 'Ế':
      return 'E'
    case 'ế':
      return 'e'
    case 'Ề':
      return 'E'
    case 'ề':
      return 'e'
    case 'Ể':
      return 'E'
    case 'ể':
      return 'e'
    case 'Ễ':
      return 'E'
    case 'ễ':
      return 'e'
    case 'Ệ':
      return 'E'
    case 'ệ':
      return 'e'
    case 'Ỉ':
      return 'I'
    case 'ỉ':
      return 'i'
    case 'Ị':
      return 'I'
    case 'ị':
      return 'i'
    case 'Ọ':
      return 'O'
    case 'ọ':
      return 'o'
    case 'Ỏ':
      return 'O'
    case 'ỏ':
      return 'o'
    case 'Ố':
      return 'O'
    case 'ố':
      return 'o'
    case 'Ồ':
      return 'O'
    case 'ồ':
      return 'o'
    case 'Ổ':
      return 'O'
    case 'ổ':
      return 'o'
    case 'Ỗ':
      return 'O'
    case 'ỗ':
      return 'o'
    case 'Ộ':
      return 'O'
    case 'ộ':
      return 'o'
    case 'Ớ':
      return 'O'
    case 'ớ':
      return 'o'
    case 'Ờ':
      return 'O'
    case 'ờ':
      return 'o'
    case 'Ở':
      return 'O'
    case 'ở':
      return 'o'
    case 'Ỡ':
      return 'O'
    case 'ỡ':
      return 'o'
    case 'Ợ':
      return 'O'
    case 'ợ':
      return 'o'
    case 'Ụ':
      return 'U'
    case 'ụ':
      return 'u'
    case 'Ủ':
      return 'U'
    case 'ủ':
      return 'u'
    case 'Ứ':
      return 'U'
    case 'ứ':
      return 'u'
    case 'Ừ':
      return 'U'
    case 'ừ':
      return 'u'
    case 'Ử':
      return 'U'
    case 'ử':
      return 'u'
    case 'Ữ':
      return 'U'
    case 'ữ':
      return 'u'
    case 'Ự':
      return 'U'
    case 'ự':
      return 'u'
    case 'Ỳ':
      return 'Y'
    case 'ỳ':
      return 'y'
    case 'Ỵ':
      return 'Y'
    case 'ỵ':
      return 'y'
    case 'Ỷ':
      return 'Y'
    case 'ỷ':
      return 'y'
    case 'Ỹ':
      return 'Y'
    case 'ỹ':
      return 'y'
    case 'Ỻ':
      return 'LL'
    case 'ỻ':
      return 'll'
    case 'Ỽ':
      return 'V'
    case 'ỽ':
      return 'v'
    case 'Ỿ':
      return 'Y'
    case 'ỿ':
      return 'y'
    case 'Þ':
      return 'P'
    case 'þ':
      return 'p'
    case 'ƍ':
      return 'd'
    case 'Ə':
      return 'e'
    case 'Ɣ':
      return 'Y'
    case 'Ɩ':
      return 'L'
    case 'ƛ':
      return 'A'
    case 'Ʊ':
      return 'U'
    case 'ƿ':
      return 'p'
    case 'Ƕ':
      return 'H'
    case 'Ƿ':
      return 'P'
    case 'ɑ':
      return 'a'
    case 'ɒ':
      return 'a'
    case 'ə':
      return 'e'
    case 'ɚ':
      return 'e'
    case 'ɣ':
      return 'Y'
    case 'ɤ':
      return 'y'
    case 'ɧ':
      return 'h'
    case 'ɩ':
      return 'l'
    case 'ɮ':
      return 'lz'
    case 'ʊ':
      return 'u'
    case 'ʘ':
      return 'O'
    case 'ʤ':
      return 'dz'
    case 'ʧ':
      return 'ts'
    case 'ʩ':
      return 'fn'
    case 'ʬ':
      return 'ww'
    case 'ʭ':
      return 'nn'
    case 'ẟ':
      return 'd'
    default:
      return char
  }
}

module.exports = removeAccents
