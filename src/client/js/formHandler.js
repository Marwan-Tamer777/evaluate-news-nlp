function handleSubmit(event) {


    const endPoint = 'https://api.meaningcloud.com/sentiment-2.1';
    let requestOptions;

    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const result = document.getElementById('results');
    const formData = new FormData();

    const regex = /^((http|https):\/\/www\.[^\s-])/;

    if(!regex.test(formText)){
        alert("Please input a valid url");
        return 0;
    }

    const API =fetch('http://localhost:3000/API');
    const API_KEY = async () => {
      let a = await API;
      a = await a.json();

      console.log("here:",a.API); 
      formData.append("key", a.API);   
      formData.append("url", formText);
      formData.append("lang", "en"); 

      requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
        }; 
    }
    
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
       Irony: ${a.irony}`;
  }

  sendResult();})
}

function sum(a,b){
  return a + b;
}

export {sum}
export { handleSubmit }

