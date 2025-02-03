const BS = BetterScroll.createBScroll(".scroll-wrapper", {
    click: true,
    bounce: false
})
let shops = []
for (let index = 0; index < 10; index++) {
    let shop = {
        img: "", // 商品图片
        name: `测试商品${index}`, // 商品名称
        price: `${Math.floor(Math.random() * 100000)}.00`, // 商品价格
        sort: "测试分类", // 商品分类
        mark: "测试备注", // 商品备注
    }
    shops.push(shop)
}
let dom_content = document.getElementsByClassName("shop-conent")[0]
shops.forEach(shop => {
    dom_content.innerHTML = dom_content.innerHTML + `<div class="shop-item"><div class="shop-img"></div><div class="shop-name">${shop.name}</div><div class="shop-price">￥${shop.price}</div><div class="shop-mark">${shop.mark}</div></div>`
})
BS.refresh()