function canConstruct(ransomNote: string, magazine: string): boolean {
     for (let i=0; i < ransomNote.length; i++) {
    let letter = ransomNote.charAt(i)
    let index = magazine.indexOf(letter)

    if (index < 0) return false 
    
    magazine = magazine.substring(0, index) + magazine.substring(index +1)
  }
  return true  
};