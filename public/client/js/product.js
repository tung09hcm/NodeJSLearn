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

// Change multi status
const change_multi_status = document.querySelectorAll("#checkbox-item");
const array_status = [];
if(change_multi_status.length > 0)
{
    change_multi_status.forEach((item) => {
        item.addEventListener("click", () => {
            if(item.checked)
            {
                if (!array_status.includes(item.getAttribute("id_product"))) {
                    array_status.push(item.getAttribute("id_product")); // Thêm id vào mảng nếu chưa có
                }
                console.log("Tick: " + item.getAttribute("id_product"));
            }
            else{
                // Nếu checkbox bị bỏ tick
                const updatedArray = array_status.filter((status) => status !== item.getAttribute("id_product")); // Loại bỏ id khỏi mảng
                array_status.length = 0; // Xóa toàn bộ mảng cũ
                array_status.push(...updatedArray); // Cập nhật mảng mới
                console.log("Un-tick: " + item.getAttribute("id_product"));
            }
            console.log(array_status);
        })
    })
}