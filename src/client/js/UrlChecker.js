function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);
   // const regex=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    var res = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
      {          
        //alert("Not valid url")
        return false;
      }
    else
        return true;
}

export { checkForUrl }
