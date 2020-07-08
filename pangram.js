let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

export const isPangram = (sentence) => {
  let numberOfLettersMissing = 0;

  alphabet.forEach(letter => {
    if (!sentence.toLowerCase().split("").includes(letter)) {
      numberOfLettersMissing++
    }
  })
  return numberOfLettersMissing === 0;
};
