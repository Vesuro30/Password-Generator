}else{
  for (i = 0; i < numChar.value; i++) {
    if(useLower && !haveLower){
      pw += String.fromCharCode(generateRandNum(97, 122));
      haveLower = true;
    }
    if(useUpper && !haveUpper){
      pw += String.fromCharCode(generateRandNum(65, 90));
      haveUpper = true;
    }
    if(useNum && !haveNum){
      pw += String.fromCharCode(generateRandNum(48, 57));
      haveNum = true;
    }
    if(useSpec && !haveSpec){
      pw += special[generateRandNum(0, 32)];
      haveSpec = true;
    }
    var charType = generateRandNum(0, 3);
    if(charType == 0 && useLower){
      pw += String.fromCharCode(generateRandNum(97, 122));
    }
    else if(charType == 1 && useUpper)
    {pw += String.fromCharCode(generateRandNum(65, 90));}
    else if(charType == 2 && useNum)
    {pw += String.fromCharCode(generateRandNum(48, 57));}
    else if(charType == 3 && useSpec)
    {pw += special[generateRandNum(0, 32)];}






    var charType = generateRandNum(0, 3);
    if(pw.length < numChar.value){
    if(charType == 0 && useLower)
      {pw += lettersLower[generateRandNum(0, 25)];}
    else if(charType == 1 && useUpper)
      {pw += lettersUppercase[generateRandNum(0, 25)];}
    else if(charType == 2 && useNum)
      {pw += numbers[generateRandNum(0, 9)];}
    else if(charType == 3 && useSpec)
      {pw += special[generateRandNum(0, 32)]}
    };
    