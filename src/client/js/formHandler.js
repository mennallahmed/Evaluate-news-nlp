function handleSubmit(event) {
    event.preventDefault()
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
    let apiKey = "";
    let data = {};
    // Get the URL from the form field
    let formText = document.getElementById('name').value

 // POST request to server
 const postData = async (url = '', data = {}) => {
    const response = await fetch(url,{
        method: 'POST',
        credentials:'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      try {
        const newData = await response.json();
        return newData;
      }catch(error) {
        console.log("error", error);
      }
}
const getApiKey = async () =>{
    const req = await fetch('http://localhost:8081/api');
    data = await req.json();
    apiKey = data.key;
    return apiKey;
  }

  const getInfo= async (baseUrl, formText, apiKey)=>{
    const res = await fetch(baseUrl+apiKey+'&of=json&model=general&lang=en&txt='+formText)
    try{
      const data = await res.json();
      console.log(data)
      return data;
    } 
    catch(error){
      console.log("error",error);
    }
  }

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('agreement').innerHTML = `Agreement: ${allData.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${allData.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${allData.irony}`;
    }catch(error){
        console.log('error', error);
    }
}

// Check for valid URL 
if(Client.checkForUrl(formText) == true){
getApiKey()
.then(() => getInfo(baseUrl,formText,apiKey))
.then((data) => {
  postData('http://localhost:8081/addText',{
    agreement: data.agreement,
    subjectivity: data.subjectivity,
    confidence: data.confidence,
    irony: data.irony,
    })
    })
    .then(() => updateUI());
  }
  else{
    document.getElementById('agreement').innerHTML ="Please enter valid URL";
    document.getElementById('subjectivity').innerHTML = "";
    document.getElementById('confidence').innerHTML = "";
    document.getElementById('irony').innerHTML = "";
  }

}



export { handleSubmit }
