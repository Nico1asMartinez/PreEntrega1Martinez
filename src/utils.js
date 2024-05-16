import { app } from "./components/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, query, where, addDoc, serverTimestamp } from "firebase/firestore";
import useCart from "./components/useCart";




export const getProducts = () => {

        const db = getFirestore(app);
        const productcollection = collection(db, "Vehiculos");
        const query = getDocs(productcollection);
        return query
            .then((res) => {
                const products = res.docs.map((doc) => {
                    const vehiculo = doc.data();
                    vehiculo.id = doc.id;
                    return vehiculo; 
                })
                return products
            })
            .catch((err) => { 
                console.log(err) })
};


export const getProductsFromCategories = (categoryId) => {
    const db = getFirestore(app);
    const productcollection = collection(db, "Vehiculos");
    
    
    const filtro = query(productcollection, where("category", "==", categoryId));
    const consulta = getDocs(filtro);
    
    return consulta
      .then((res) => {
        const products = res.docs.map((doc) => {
          const vehiculo = doc.data();
          vehiculo.id = doc.id;
          return vehiculo;
        })
        return products
  
    
      })
      .catch((err) => {
        console.log(err);
      })
        
      
};


export const getProductDetail = (id) =>{

    const db = getFirestore(app);
    const productcollection = collection(db, "Vehiculos");
    const filtro = doc(productcollection, id);
    const consulta = getDoc(filtro)

    return consulta
    .then((res) => {
        const product = res.data()
        return product
    })
        

    .catch((err) => {
        console.log(err)
    })
    

    
};




export const createSale = () => {
        const db = getFirestore(app);
        const salescollection = collection(db, "ventas");
        
        const venta = {
          items : [carrito],
          usuario : {nombre : 'Javier', email : 'q6F4W@example.com', telefono : '123456' },
          fecha : serverTimestamp(),
          total : 0 
          } 

          const consulta = addDoc(salescollection, venta)
          consulta
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
        
}