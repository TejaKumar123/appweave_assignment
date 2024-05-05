
var current_ele = "";
function open_page(event, a, b) {
    let ele = event.currentTarget;
    if (current_ele == "") {
        current_ele = ele;
        current_ele.style.borderBottom = "2px solid white";
    }
    else {
        current_ele.style.borderBottom = "none";
        current_ele = ele;
        current_ele.style.borderBottom = "2px solid white";
    }
    let page1 = document.getElementById(a);
    let page2 = document.getElementById(b);
    page1.style.display = "block";
    page2.style.display = "none";
}
document.getElementById("prod_link").click();

function open_filter(event) {
    let ele = event.currentTarget;
    if (ele.nextElementSibling.style.display == "block") {
        ele.nextElementSibling.style.display = "none";
    }
    else {
        ele.nextElementSibling.style.display = "block";
    }
}

function create_ele(el) {
    return document.createElement(el);
}

var list_of_items = {
    0: { name: "black blue polo", url: "black blue polo m.jpeg", price: 250, gender: ["men"], colors: ["black", "blue"], type: ["polo"], range: "[0,250]" },
    1: { name: "black polo", url: "black polo m.jpeg", price: 350, gender: ["men"], colors: ["black"], type: ["polo"], range: "[250,500]" },
    2: { name: "green white hoodie", url: "black white hoodie m.jpeg", price: 270, gender: ["men"], colors: ["white", "green"], type: ["hoodie"], range: "[250,500]" },
    3: { name: "black white polo", url: "black white polo f.jpeg", price: 300, gender: ["women"], colors: ["white", "black"], type: ["polo"], range: "[250,500]" },
    4: { name: "blue basic", url: "blue basic m.jpeg", price: 150, gender: ["men"], colors: ["blue"], type: ["basic"], range: "[0,250]" },
    5: { name: "blue hoodie", url: "blue hoodie m.jpeg", price: 450, gender: ["men"], colors: ["blue"], type: ["hoodie"], range: "[250,500]" },
    6: { name: "green polo", url: "green polo f.jpeg", price: 750, gender: ["women"], colors: ["green"], type: ["polo"], range: "[500,1000]" },
    7: { name: "blue polo", url: "blue polo m.jpeg", price: 120, gender: ["men"], colors: ["blue"], type: ["polo"], range: "[0,250]" },
    8: { name: "green basic", url: "green basic m.jpeg", price: 230, gender: ["men"], colors: ["green"], type: ["basic"], range: "[0,250]" },
    9: { name: "green hoodie", url: "green hoodie f.jpeg", price: 299, gender: ["women"], colors: ["green"], type: ["hoodie"], range: "[250,500]" },
    10: { name: "violet basic", url: "violet basic f.jpeg", price: 500, gender: ["women"], colors: ["violet"], type: ["basic"], range: "[250,500]" },
    11: { name: "white basic", url: "white basic m.jpeg", price: 200, gender: ["men"], colors: ["white"], type: ["basic"], range: "[0,250]" },
    12: { name: "red black basic", url: "red black basic m.jpeg", price: 310, gender: ["men"], colors: ["red", "black"], type: ["basic"], range: "[250,500]" },
    13: { name: "black hoodie", url: "black hoodie m.jpeg", price: 650, gender: ["men"], colors: ["black"], type: ["hoodie"], range: "[500,1000]" },
    14: { name: "green polo", url: "green polo m.jpeg", price: 230, gender: ["men"], colors: ["green"], type: ["polo"], range: "[0,250]" },
    15: { name: "green polo", url: "green polo1 m.jpeg", price: 390, gender: ["men"], colors: ["green"], type: ["polo"], range: "[250,500]" },
    16: { name: "grey polo", url: "grey polo m.jpeg", price: 380, gender: ["men"], colors: ["grey"], type: ["polo"], range: "[250,500]" },
    17: { name: "red basic", url: "red basic f.jpeg", price: 150, gender: ["women"], colors: ["red"], type: ["basic"], range: "[0,250]" },
    18: { name: "red blue grey strips", url: "red blue grey strips m.jpeg", price: 170, gender: ["men"], colors: ["red", "blue", "grey"], type: ["strips"], range: "[0,250]" },
    19: { name: "red hoodie", url: "red hoodie m.jpeg", price: 300, gender: ["men"], colors: ["red"], type: ["hoodie"], range: "[250,500]" },
    20: { name: "red polo", url: "red polo m.jpeg", price: 499, gender: ["men"], colors: ["red"], type: ["polo"], range: "[250,500]" },
    21: { name: "white polo", url: "white polo m.jpeg", price: 270, gender: ["men"], colors: ["white"], type: ["polo"], range: "[250,500]" },
    22: { name: "black violet hoodie", url: "black violet hoodie f.jpeg", price: 260, gender: ["women"], colors: ["black", "violet"], type: ["hoodie"], range: "[250,500]" },
}

var temp_list_of_items = {};

var list_of_carts = {

}

function create_card(index) {
    let obj = list_of_items[index];
    let parent = document.getElementById("cards");
    let main_div = create_ele("div");
    main_div.setAttribute("title", obj["name"])

    let li1 = create_ele("li");
    li1.innerHTML = index;

    let div2 = create_ele("div")
    let img1 = create_ele("img")
    img1.setAttribute("src", "images/pics/" + obj["url"])
    img1.setAttribute("alt", obj["name"])
    div2.appendChild(img1)

    let div3 = create_ele("div");
    let li2 = create_ele("li")
    let li3 = create_ele("li")
    li2.innerHTML = obj["name"];
    li3.innerHTML = "Rs." + obj["price"];
    let div4 = create_ele("div");
    div4_text = "<div><button onclick='dec_count(event)'>-</button><li>1</li><button onclick='inc_count(event)'>+</button></div><button onclick='add_cart(event)'>ADD</button>";
    let span1 = create_ele("span");
    span1.addEventListener("click", close_alert);
    span1.setAttribute("title", "close the alert")
    div4.innerHTML = div4_text;
    div3.appendChild(li2);
    div3.appendChild(li3);
    div3.appendChild(div4);
    div3.appendChild(span1);

    main_div.appendChild(li1);
    main_div.appendChild(div2);
    main_div.appendChild(div3);

    parent.appendChild(main_div);
}

function close_alert(event) {
    event.currentTarget.innerHTML = "";
}

function load_cards(items) {
    (Object.keys(items)).forEach((k) => {
        create_card(k);
    })
}

load_cards(list_of_items);

function create_cart(index, num) {
    let cart_det = list_of_items[index]
    let parent = document.getElementById("carts");
    let main_div = create_ele("div");

    let id_li = create_ele("li");
    id_li.setAttribute("style", "display:none");
    id_li.innerHTML = index;

    let div1 = create_ele("div");
    let img1 = create_ele("img");
    img1.setAttribute("src", "images/pics/" + cart_det["url"])
    img1.setAttribute("alt", cart_det["name"]);
    div1.appendChild(img1);

    let div2 = create_ele("div");
    let li1 = create_ele("li");
    let li2 = create_ele("li");
    let li3 = create_ele("li");
    li1.innerHTML = cart_det["name"]
    li2.innerHTML = "Rs." + cart_det["price"];
    li3.innerHTML = num;
    div2.appendChild(li1);
    div2.appendChild(li2);
    div2.appendChild(li3);

    let button = create_ele("button");
    button.innerHTML = "Delete";
    button.addEventListener("click", delete_cart);

    main_div.appendChild(div1);
    main_div.appendChild(div2);
    main_div.appendChild(button);
    main_div.appendChild(id_li);

    parent.prepend(main_div);

}

function load_carts(items) {
    (Object.keys(items)).forEach((v) => {
        create_cart(v, items[v]);
    })
    load_amount(list_of_carts);
}

function load_amount(items) {
    let total_count = 0;
    let total_pri = 0;
    (Object.keys(items)).forEach((v) => {
        total_count += parseInt(items[v]);
        total_pri += items[v] * list_of_items[v]["price"];
    })
    document.getElementById("cart_nos").innerHTML = total_count;
    document.getElementById("total_prod").innerHTML = total_count;
    document.getElementById("total_price").innerHTML = total_pri.toFixed(1);
}

load_carts(list_of_carts);

function inc_count(event) {
    let ele = event.currentTarget;
    let value_ele = ele.previousElementSibling
    let alert_ele = ele.parentElement.parentElement.nextElementSibling;
    alert_ele.style.color = "red";
    if (parseInt(value_ele.innerHTML) < 5) {
        value_ele.innerHTML = parseInt(value_ele.innerHTML) + 1;
        alert_ele.innerHTML = "";
    }
    else {
        alert_ele.innerHTML = "Cart count limit is upto 5 only."
    }
}

function dec_count(event) {
    let ele = event.currentTarget;
    let value_ele = ele.nextElementSibling;
    let alert_ele = ele.parentElement.parentElement.nextElementSibling;
    alert_ele.style.color = "red";
    if (parseInt(value_ele.innerHTML) > 1) {
        value_ele.innerHTML = parseInt(value_ele.innerHTML) - 1;
        alert_ele.innerHTML = "";
    }
    else {
        alert_ele.innerHTML = "Minimum cart count should be 1";
    }
}

function add_cart(event) {
    let ele = event.currentTarget;
    let qty = ele.previousElementSibling.children[1].innerHTML;
    let id = ele.parentElement.parentElement.parentElement.children[0].innerHTML;
    let alert_ele = ele.parentElement.nextElementSibling;
    if ((Object.keys(list_of_carts)).includes(id)) {
        alert_ele.style.color = "red";
        alert_ele.innerHTML = "Cart is already added.";
    }
    else if (qty > 0 && qty < 6) {
        list_of_carts[id] = qty;
        load_amount(list_of_carts);
        create_cart(id, qty);
        alert_ele.style.color = "green";
        alert_ele.innerHTML = "Cart added successfully";
    }
    else {
        alert_ele.style.color = "red";
        alert_ele.innerHTML = "Minimum carts is 1.<br>Maximum carts is 5."
    }

}

function delete_cart(event) {
    let ele = event.currentTarget;
    let id = ele.nextElementSibling.innerHTML;
    delete list_of_carts[id];
    load_amount(list_of_carts);
    ele.parentElement.remove();
}

function search_cards(event) {
    document.getElementById("reset_button").click();
    temp_list_of_items = {}
    let search_keyword = event.currentTarget.value;
    let search_key_list = [];
    if (search_keyword.length == 0) {
        document.getElementById("cards").innerHTML = "";
        load_cards(list_of_items);
        return;
    }
    else {
        for (v of search_keyword.toLowerCase().split(" ")) {
            if (v.length > 0) {
                search_key_list.push(v);
            }
        }
        (Object.keys(list_of_items)).forEach((v) => {
            let item_data = list_of_items[v];
            let data_list = Object.values(item_data).flat();
            let present_flag = search_key_list.every((v) => {
                return data_list.includes(v);
            })
            if (present_flag) {
                temp_list_of_items[v] = JSON.parse(JSON.stringify(list_of_items[v]));
            }
        })
        if (Object.keys(temp_list_of_items).length == 0) {
            document.getElementById("cards").innerHTML = "<h1>No Items Found</h1>";
            return;
        }
        document.getElementById("cards").innerHTML = "";
        load_cards(temp_list_of_items);
    }

}

document.querySelectorAll("#filter_form>div>input[type='checkbox']").forEach((v) => {
    v.addEventListener("change", filter_cards);
})

function filter_cards() {
    let already_searched_items;
    if (Object.keys(temp_list_of_items).length != 0) {
        already_searched_items = JSON.parse(JSON.stringify(temp_list_of_items));
    }
    else {
        already_searched_items = JSON.parse(JSON.stringify(list_of_items));
    }

    let temp_filter_items = {};
    let parent_form = document.getElementById("filter_form");
    let data1 = new FormData(parent_form)
    let data = {};
    data1.forEach((v, k) => {
        data[k] = v;
    });

    let temp_already_searched_item = {};
    let price_array = ["price1", "price2", "price3", "price4"].filter((v) => {
        return Object.keys(data).includes(v);
    });
    if (price_array.length != 0) {
        Object.keys(already_searched_items).forEach((key) => {
            let flg = price_array.some((v) => {
                return Object.values(already_searched_items[key]).includes(data[v]);
            })
            if (flg) {
                temp_already_searched_item[key] = JSON.parse(JSON.stringify(already_searched_items[key]))
            }
        })
        price_array.forEach((v) => {
            delete data[v];
        })
        already_searched_items = JSON.parse(JSON.stringify(temp_already_searched_item));
    }

    if (Object.keys(data).length == 0) {
        if (Object.keys(already_searched_items).length != 0) {
            document.getElementById("cards").innerHTML = "";
            load_cards(already_searched_items);
        }
        else {
            document.getElementById("cards").innerHTML = "<h1>No Items with given filters</h1>";
        }
        return;
    }
    else {
        Object.keys(already_searched_items).forEach((k) => {
            let item = already_searched_items[k];
            let item_data = Object.values(item).flat();
            let flag = Object.values(data).every((val) => {
                return item_data.includes(val);
            })
            if (flag) {
                temp_filter_items[k] = JSON.parse(JSON.stringify(already_searched_items[k]));
            }
        })
        if (Object.keys(temp_filter_items).length != 0) {
            document.getElementById("cards").innerHTML = "";
            load_cards(temp_filter_items);
        }
        else {
            document.getElementById("cards").innerHTML = "<h1>No Items with given filters</h1>";
        }

    }

}

function clear_all_filters(event) {
    let ele = event.currentTarget;
    ele.previousElementSibling.click();
    document.getElementById("filter").children[0].click();
    filter_cards();
}

function cancel_submit(event) {
    event.preventDefault();
}


/*
dict={
    0:{name:"red polo",url:"",price:250,gender:["men","women"],colors:["red","black"],type:["polo","hoodie","basic"]}
}

buy_dict={
    0:1,
    2:6
}

functions to create. -------->

1.one function to create card template
2.one function which send all dict of items to create card template function->(1)

3.one function to create cart items template
4.one functions which send all user cart items one by one to create cart items template->(3)

search related functions----->
5.one function which took all products and apply search keywords to all products one by one, send the resultant items to function ->(2), we will store these resultant items in one variable, these are useful while filtering. ---(need to store the result)

filter related functions------>
6.one function which took requirements of users from form and apply to the result items of function ->(5) after that we got some another resultant items then we will send that products to function ->(2) ---(no need to store the result)

*/