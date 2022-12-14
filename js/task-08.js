const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
    return;
  }

  console.log({
    email: `${email.value}`,
    password: `${password.value}`,
  });
  e.currentTarget.reset();
});

// {
//     const values = {
//       email: `${email.value}`,
//       password: `${password.value}`,
//     };
//     console.log(values);
//     e.currentTarget.reset();
//   }
