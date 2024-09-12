let a = document.getElementById("formsudheer");
let c = document.getElementById("Errmsg");
let b = document.getElementById("sitename");
b.addEventListener("blur", function() {
    if (b.value === "") {
        c.textContent = "*Required";
    } else {
        c.textContent = "";
    }
});
let d = document.getElementById("Errmsg1");
let e = document.getElementById("siteurl");
e.addEventListener("blur", function() {
    if (e.value === "") {
        d.textContent = "*Required";
    } else {
        d.textContent = "";
    }
});
a.addEventListener("submit", function(event) {

    event.preventDefault();
});
let submit = document.getElementById("btn");
let adb = document.getElementById("adbg");

function addBookMark() {
    let ol = document.createElement("ol");
    ol.classList.add("oll");
    let list = document.createElement("li");
    list.classList.add("app");
    list.textContent = b.value;
    ol.appendChild(list);
    adb.appendChild(ol);
    let linklist = document.createElement("a");
    linklist.href = e.value;
    linklist.target = "_blank";
    linklist.textContent = e.value;
    ol.appendChild(linklist);
    adb.appendChild(ol);
}
submit.addEventListener("click", function() {
    if (b.value === "" && e.value === "") {
        d.textContent = "*Required";
        c.textContent = "*Required";
    } else if (b.value === "") {
        d.textContent = "*Required";
    } else if (e.value === "") {
        c.textContent = "*Required";
    } else {
        addBookMark();
    }
});