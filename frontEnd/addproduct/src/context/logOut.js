
export function logOut() {
    fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: 'include',
    }).then((response) => {      
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.removeItem("adminUser");
}
