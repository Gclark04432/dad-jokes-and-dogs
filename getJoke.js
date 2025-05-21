async function getDog() {
const url = "https://icanhazdadjoke.com/";  

try {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json",  
            "User-Agent": "Dad Jokes & Dogs (https://github.com/Gclark04432/dad-jokes-and-dogs)"      
        }
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    document.getElementById('joke').innerHTML = json.joke
  } catch (error) {
    console.error(error.message);
  }
}

getDog()      
        