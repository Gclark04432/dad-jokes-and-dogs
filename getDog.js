async function getDog() {
const url = "https://dog.ceo/api/breed/labrador/images/random";  

try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    document.getElementById('dog-pic')['src'] = json.message
  } catch (error) {
    console.error(error.message);
  }
}

getDog()      
        