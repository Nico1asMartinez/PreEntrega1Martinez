




        
        const promesa = new Promise((resolve) => {
          setTimeout(() => {
              resolve({informacion})
          }, 2000);
      })
      promesa.then((resolve) => {
        console.log(resolve)
  
      })


   