module.exports = (query) => {
    let filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""
        },
        {
            name: "Hoạt động",
            status: "true",
            class: ""
        },
        {
            name: "Dừng hoạt dộng",
            status: "false",
            class: ""
        }
    ];
    if(query.active)
    {
        const index = filterStatus.findIndex(item => item.status == query.active);
        filterStatus[index].class = "active";
    }
    else{
        const index = filterStatus.findIndex(item => item.status == "");
        filterStatus[index].class = "active";
    }
    return filterStatus;
}