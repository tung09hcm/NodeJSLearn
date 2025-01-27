const buttonStatus = document.querySelectorAll("[button-status]");
if(buttonStatus.length > 0 )
{
    let url = new URL(window.location.href);
    console.log(url);

    buttonStatus.forEach(button => {
        button.addEventListener("click" , () => {
            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("active", status);
            }
            else{
                url.searchParams.delete("active");
            }
            window.location.href = url.href;
        })
        
    })

}

const formSearch = document.querySelector("#form-submit");
if(formSearch)
{
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e.target.elements.keyword.value);
        const keyword = e.target.elements.keyword.value;
        if(keyword)
        {
            url.searchParams.set("keyword", keyword);
        }
        else{
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    })
}

const pagination = document.querySelectorAll(".pagination");
if(pagination.length > 0)
{
    let url = new URL(window.location.href);
    pagination.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button.getAttribute("id"));
            url.searchParams.set("page", button.getAttribute("id"));
            window.location.href = url.href;
        })
    })
}