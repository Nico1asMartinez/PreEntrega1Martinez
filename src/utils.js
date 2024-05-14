import { app } from "./components/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";




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
    const db = getFirestore(app)
    const salesCollection = collection(db, "ventas")
  
    const venta = {
      items: [],
      usuario: { nombre: "Horacio", tel: "123456789", email: "test@test.com" },
      fechaDeCompra: serverTimestamp(),
      status: "pendiente",
      total: 0
    }
  
    const consulta = addDoc(salesCollection, venta)
    
    consulta
      .then((resultado)=>{
        console.log(resultado)
      })
      .catch((error)=>{
        console.log(error)
      })
  
  }