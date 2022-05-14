async function getLang() {
    let language = [];
    fetch('https://restcountries.com/v3/all').then((response) => {
      return response.json();
    }).then((data) => {
      let dtt = data;
      dtt.forEach(element => {
        if (typeof element.languages === 'object' && element.languages !== null) {
          language.push(Object.values(element.languages))
        }
      });
      let totalLang = Array.from(new Set(language.flat()))
    }).catch((err) => { console.log(err); });
    
  }
  getLang();
  
  function top10LargeCountries() {
    let Area = [];
    fetch('https://restcountries.com/v3/all').then((response) => {
      return response.json();
    }).then((data)=> { 
      data.forEach(element => {
        let newobj = {};
        newobj['country'] = element.name.common;
        newobj['area'] = element.area;
      Area.push(newobj)
    });
      let sortedA = Area.sort((a, b) => { return b.area - a.area });
      let top10 = sortedA.slice(0, 10);
      console.log(top10);
    })
  }
  
  top10LargeCountries();