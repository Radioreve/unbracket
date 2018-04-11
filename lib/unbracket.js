const EMPTY_STRING = "";

function unbracketWithParenthesis(string) {
  return unbracket(string, ["(", ")"]);
}

function unbracketWithBrackets(string) {
  return unbracket(string, ["[", "]"]);
}

function unbracketWithCurlyBraces(string) {
  return unbracket(string, ["{", "}"]);
}

function unbracketWithRafters(string) {
  return unbracket(string, ["<", ">"]);
}

function unbracket(string, delimiters, result = [], insideBracket = false, outsideBracket = !insideBracket) {

  const OPENING_BRACKET = delimiters[0];
  const CLOSING_BRACKET = delimiters[1];

  if (string === EMPTY_STRING) {
    return result;
  }
  const firstCharacter = string[0];
  const remainingString = string.slice(1);

  if (insideBracket) {
    if (firstCharacter === CLOSING_BRACKET) {
      return unbracket(remainingString, delimiters, result, !insideBracket);
    }
    result[result.length - 1] += firstCharacter;
    return unbracket(remainingString, delimiters, result, insideBracket);
  }

  if (outsideBracket) {
    if (firstCharacter === OPENING_BRACKET) {
      result.push(EMPTY_STRING);
      return unbracket(remainingString, delimiters, result, !insideBracket);
    }
    return unbracket(remainingString, delimiters, result, insideBracket);
  }

}

module.exports = {
  unbracketWithParenthesis: unbracketWithParenthesis,
  unbracketWithBrackets: unbracketWithBrackets,
  unbracketWithCurlyBraces: unbracketWithCurlyBraces,
  unbracketWithRafters: unbracketWithRafters
};