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
