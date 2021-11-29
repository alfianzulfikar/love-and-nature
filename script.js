// initial ajax to populate posts data
const ajax = new XMLHttpRequest();
ajax.onload = function () {
  let data = JSON.parse(ajax.responseText);
  let firstPost = "";
  let firstTwoPost = "";
  let posts = "";
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      firstPost += `
        <div class="first-post">
          <img
            src="./assets/images/${data[i].image}"
            alt="${data[i].image}"
            class="post-img"
          />
          <div class="post-info">
            <div class="post-category">${data[i].category}</div>
            <div class="post-title">
              <p>
              ${data[i].title}
              </p>
            </div>
          </div>
        </div>
        <div class="first-two" id="first-two"></div>
      `;
      document.getElementById("first-three").innerHTML = firstPost;
    } else if (i === 1 || i === 2) {
      firstTwoPost += `
        <div class="post">
          <img
            src="./assets/images/${data[i].image}"
            alt="${data[i].image}"
            class="post-img"
          />
          <div class="post-info">
            <div class="post-category">${data[i].category}</div>
            <div class="post-title">
              <p>
              ${data[i].title}
              </p>
            </div>
          </div>
        </div>
      `;
    } else {
      posts += `
        <div class="post">
          <img
            src="./assets/images/${data[i].image}"
            alt="${data[i].image}"
            class="post-img"
          />
          <div class="post-info">
            <div class="post-category">${data[i].category}</div>
            <div class="post-title">
              <p>
              ${data[i].title}
              </p>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById("first-two").innerHTML = firstTwoPost;
    document.getElementById("posts").innerHTML = posts;
  }
};
ajax.open("GET", "./data.json");
ajax.send();

function showMenuPanel() {
  let menuPanel = document.getElementById("menu-panel");
  if (menuPanel.classList.contains("menu-show")) {
    menuPanel.style.top = "-200px";
    menuPanel.classList.remove("menu-show");
  } else {
    menuPanel.style.top = "45px";
    menuPanel.classList.add("menu-show");
  }
}
