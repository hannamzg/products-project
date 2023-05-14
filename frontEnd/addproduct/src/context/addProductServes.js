


export const addProductServes = (file,name,price,description,userId,categories) => {
    const formData = new FormData();
    formData.append("image",file);
    formData.append("name",name);
    formData.append("price",price);
    formData.append("description",description);
    formData.append("adminId",userId)
    formData.append("categories",categories)
   
  
     fetch("http://localhost:5000/api/addProduct", {
      method: "POST",
      body: formData,
      credentials: 'include',
    }).then((response) => {
        response.json().then((data) => { 
          return data
        });
      })
      .catch((error) => {
        return error
      });   
  };
  