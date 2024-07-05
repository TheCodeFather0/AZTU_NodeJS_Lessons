// get
// post
// put
// patch
// delete

const url = "http://localhost:3000/users/";

const getAllUsers = () => {
  axios(url)
    .then(({ data }) => {
      data.forEach(({ id, firstName, lastName }) => {
        console.log(`salam ${firstName} ${lastName}`);
      });
    })
    .catch((err) => {
      throw new Error("qardasim nese problem var");
    })
    .finally(() => {
      console.log("---------------------------------------------------------");
      console.log("proses basa catdi");
    });
};

const setUser = () => {
  const _firstName = prompt("adinizi daxil edin");
  const _lastName = prompt("soy adinizi daxil edin");

  const newData = {
    firstName: _firstName,
    lastName: _lastName,
  };

  axios.post(url, newData).then((res) => {
    if (res.statusText === "Created") {
      console.log("ugurla elave edildi");
    }
  });
};

const deleteUser = () => {
  axios.delete(url + "479a").then((res) => {
    if (res.statusText === "OK") {
      console.log("ugurla silindi");
    }
  });
};

// deleteUser();

const updateUser = () => {
  const data = {
    firstName: "Azad",
  };
  axios.patch(url + "2", data).then((res) => {
    if (res.statusText === "OK") {
      console.log("ugurla deyisdirildi");
    }
  });
};

updateUser();
