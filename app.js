       let firstName = prompt("Ismingizni kiriting:");

       let lastName = prompt("Familiyangizni kiriting:");

       let age = prompt("Yoshingizni kiriting:");

       let choice = prompt("Ismingiz kichik harflarda bo'lishini istasangiz 1 ni, katta harflarda bo'lishini istasangiz 2 ni kiriting:");

       let result;

       if (choice === "1") {
           result = `Ismingiz: ${firstName.toLowerCase()} ${lastName}\nFamiliya: ${lastName}\nYoshingiz: ${age}`;
       } else if (choice === "2") {
           result = `Ismingiz: ${firstName.toUpperCase()} ${lastName}\nFamiliya: ${lastName}\nYoshingiz: ${age}`;
       } else {
          alert("Iltimos, 1 yoki 2 raqamini tanlang.")
       }

       document.getElementById("div").innerText = result;