// Change Status
const change_status_button = document.querySelectorAll("[button-change-status]");
if(change_status_button.length > 0)
{
    const form = document.querySelector("#form-change-status");
    const path = form.getAttribute('data-path');

    console.log("path: " + path);

    change_status_button.forEach((item) => {
        item.addEventListener("click" , () => {
            const status = item.getAttribute("data-status"); // Chuỗi
            const id = item.getAttribute("id");
            
            let statusChange = !(status === "true"); // Chuyển đổi "true"/"false" thành Boolean và đảo giá trị.
            
            console.log((status === "true" ? "true" : "false") + "---" + id);
            console.log(statusChange);  

            const action = path + `/${statusChange.toString()}` +`/${id.toString()}` + `?_method=PATCH`;  
            console.log("new path: " + action);
            form.action = action;
            form.submit();
        })
    })
}