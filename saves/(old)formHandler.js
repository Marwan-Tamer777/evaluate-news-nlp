

function handleSubmit(event) {


    const endPoint = 'https://api.meaningcloud.com/sentiment-2.1';
    let requestOptions;

    event.preventDefault()

    // check what text was put into the form field and create a form data for  the API call
    let formText = document.getElementById('name').value
    const result = document.getElementById('results');
    const formData = new FormData();

    console.log(js.checkForName(formText));
    //call to the local server to send the APIKEY and then fill the data for the meaningcloud API
    const API =fetch('http://localhost:3000/API');
    const API_KEY = async () => {
      let a = await API;
      a = await a.json();

      formData.append("key", a.API);   
      formData.append("url", formText);
      formData.append("lang", "en"); 

      requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
        }; 
        console.log(requestOptions, JSON.stringify(requestOptions));
    }
    
    //calls the api function to create and update the requestOptions var (data for the next api call)
    //then calls the meaningCloud api and processes the results.
    API_KEY().then(()=>{ const response = fetch(endPoint, requestOptions)
   .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => {return body;})
  .catch(error => console.log('error', error))

  const sendResult = async () => {
      const a = await response;
      console.log(a);
      result.innerText = 
      `Subjectivity: ${a.subjectivity}
       Agreement: ${a.agreement}
       Irony: ${a.irony}
       multiple snippets:
       [1]: ${a.sentence_list[0].text}
       [2]: ${a.sentence_list[1].text}
       [3]: ${a.sentence_list[2].text}
       [4]: ${a.sentence_list[3].text}
       [5]: ${a.sentence_list[4].text}
       [6]: ${a.sentence_list[5].text}
       [7]: ${a.sentence_list[6].text}`;
       return a;
  }

  sendResult();})
}


export { handleSubmit }

