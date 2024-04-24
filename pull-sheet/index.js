const ulPosition = (position, arr) => {
    try {
      let ul = document.getElementById("ul-dom");
      let createLi = document.createElement("li");
      createLi.setAttribute("class", "nav-item");
      createLi.setAttribute("style", "margin-right:10px");
  
      let createButton = document.createElement("button");
      createButton.setAttribute("class", "btn btn-primary");
      createButton.innerText = position;
  
      createButton.addEventListener("click", (event) => {
        if (position === "All") {
          displayMain(arr);
        } else {
          let filter = arr.filter((a) => a.position === position);
          displayMain(filter);
        }
      });
  
      createLi.appendChild(createButton);
      ul.appendChild(createLi);
    } catch (e) {
      console.log("e ", e);
    }
  };
  
  const displaying = (arrs) => {
    let uniquePositions = [
      {
        position: "All",
      },
    ];
    for (let arr of arrs) {
      let find = uniquePositions.find((a) => a.position === arr.position);
      if (find === undefined) {
        if (arr.position) {
          uniquePositions.push(arr);
        }
      }
    }
  
    for (let uniquePosition of uniquePositions) {
      ulPosition(uniquePosition.position, arrs);
    }
  
    displayMain(arrs);
  };
  
  const displayMain = (arrs) => {
    let mainDisplay = document.getElementById("main-display");
    mainDisplay.innerHTML = "";
    let head1 = document.createElement("h1");
    head1.setAttribute("style", "text-align:center");
    head1.innerText = "Group Members";
    mainDisplay.appendChild(head1);
    for (let arr of arrs) {
      if(arr.alumni == "0"){
        let column = document.createElement("div");
        column.setAttribute("class", "col");
        column.setAttribute("style", "width:200px;height:auto;padding:10px");
        column.setAttribute("style","display: flex;flex-direction: column; align-items: center; ");

    
    
        let img = document.createElement("img");
        img.setAttribute("src", arr?.image);
        img.setAttribute("style", "width:200px;height:200px;border-radius:20px");
    
        let name = document.createElement("div");
        name.setAttribute("style", "font-weight:bold;font-size:18px;width:200px;height:auto;");
        name.innerText = arr.name;
    
        let position = document.createElement("div");
        position.setAttribute("style", "font-size:12px;width:200px;height:auto;");
        position.innerText = arr.position + ', ' + arr.affiliation;

        let email = document.createElement("div");
        email.setAttribute("style", "font-size:12px;padding-top:10px;width:200px;height:auto;");
        email.innerText = 'email: ' + arr.email;

        let bio = document.createElement("ul");
        bio.setAttribute("style", "font-size:12px;padding-top:10px;width:200px;height:auto;");
        if(arr.bio1 != ""){
          let bio1 = document.createElement("li");
          bio1.innerText = arr.bio1;
          bio.appendChild(bio1);
        }
        if(arr.bio2 != ""){
          let bio2 = document.createElement("li");
          bio2.innerText = arr.bio2;
          bio.appendChild(bio2);
        }
        if(arr.bio3 != ""){
          let bio3 = document.createElement("li");
          bio3.innerText = arr.bio3;
          bio.appendChild(bio3);
        }
        if(arr.bio4 != ""){
          let bio4 = document.createElement("li");
          bio4.innerText = arr.bio4;
          bio.appendChild(bio4);
        }

        column.appendChild(img);
        column.appendChild(name);
        column.appendChild(position);
        column.appendChild(email);
        column.appendChild(bio);
        mainDisplay.appendChild(column);
      }
    }
    let head2 = document.createElement("h1");
    head2.setAttribute("style", "text-align:center");
    head2.innerText = "Alumni";
    mainDisplay.appendChild(head2);
    for (let arr of arrs) {
      console.log(arr)
      if(arr.alumni == "1"){
        let column = document.createElement("div");
        column.setAttribute("class", "col");
        column.setAttribute("style", "width:200px;height:auto;padding:10px");
        column.setAttribute("style","display: flex;flex-direction: column; align-items: center; ");

    
    
        let img = document.createElement("img");
        img.setAttribute("src", arr?.image);
        img.setAttribute("style", "width:200px;height:200px;border-radius:20px");
    
        let name = document.createElement("div");
        name.setAttribute("style", "font-weight:bold;font-size:18px;width:200px;height:auto;");
        name.innerText = arr.name;
    
        let position = document.createElement("div");
        position.setAttribute("style", "font-size:12px;width:200px;height:auto;");
        position.innerText = arr.position + ', ' + arr.affiliation;

        let email = document.createElement("div");
        email.setAttribute("style", "font-size:12px;padding-top:10px;width:200px;height:auto;");
        email.innerText = 'email: ' + arr.email;

        let alumni_current = document.createElement("div");
        alumni_current.setAttribute("style", "font-size:12px;padding-top:10px;width:200px;height:auto;");
        alumni_current.innerText = arr.alumni_current;

        column.appendChild(img);
        column.appendChild(name);
        column.appendChild(position);
        column.appendChild(email);
        column.appendChild(alumni_current);
        mainDisplay.appendChild(column);
      }
    }

    
  };