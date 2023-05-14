import Filter from "../components/filter";
import Products from "../components/products";
import SelectProducts from "../components/selectProducts";
import { useEffect, useState } from "react";
import { getAllProducts } from "../serves/getAllProducts";


function MainPage() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState("");
 
  
  useEffect(() => {
    try {
      getAllProducts()
        .then((data) => {
          setData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);



  return (
    <div>
      <Filter
        data={data}
        setSelectedData={setSelectedData}
        selectedData={selectedData}
        />
        {selectedData ? (
        <SelectProducts selectedData={selectedData} />
        ) : (
          <Products data={data} />
        )}
  
    </div>
  );
}

export default MainPage;
