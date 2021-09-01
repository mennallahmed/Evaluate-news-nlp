function handleSubmit(event) {
    event.preventDefault()
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
    let apiKey = "";
    let data = {};
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")

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
        document.getElementById('results').innerHTML = allData.agreement;
    }catch(error){
        console.log('error', error);
    }
    console.log('AFTER GET');
}

// console.log("User input posted to the server");
    getApiKey()
    .then(
    getInfo(baseUrl,formText,apiKey)
    .then(function(data){
      console.log(data);
      postData('http://localhost:8081/addText',{
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,    
      //userInput: formText
      }).then(
        updateUI()
      )
    })
    )


 /*   fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/

}



export { handleSubmit }
// "https://api.meaningcloud.com/sentiment-2.1"
