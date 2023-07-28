function isAnagramInArray(anagram, arr) {
    const sortString = str => str.split('').sort().join('').replace(/\s/g, '');
  
    const anagramChars = sortString(anagram.toLowerCase());
  
    const result = arr.filter(anagramItem => {
      const anagramItemChars = sortString(anagramItem.toLowerCase());
      return anagramChars === anagramItemChars;
    });
  
    return result;
  }
  
  const anagrams = [
    "oz bilal tochberer",
    "it's razorbill beachcomber",
    "och robe tilblazer",
    "bib chorizo cellarmaster",
    "thor bble carizole",
    "zll borcht aberoie",
    "brzl orche atobile",
    "dame shelburne characterizing",
    "uber englishman characterized",
    "agnes rhumbline characterized",
    "rehab scrutinized charlemagne",
    "dreams zurich interchangeable",
    "bam hamster technocratic",
    "mechatronic masterbatch",
    "bam ratchet mechatronics"
  ];
  
  console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
  