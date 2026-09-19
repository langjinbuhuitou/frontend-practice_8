// 本地行星数据 不需要后端 完全前端运行
const planets = [
    { name: "水星", info: "太阳系最小的行星，距离太阳最近，表面温差极大。", size: 5 },
    { name: "金星", info: "表面有浓厚的二氧化碳大气，是太阳系最热的行星。", size: 12 },
    { name: "地球", info: "我们的家园，目前已知唯一存在生命的星球。", size: 13 },
    { name: "火星", info: "红色的类地行星，人类探索太空的下一个重要目标。", size: 7 },
    { name: "木星", info: "太阳系最大的行星，著名的大红斑是持续数百年的风暴。", size: 120 },
    { name: "土星", info: "拥有标志性的行星环，密度比水还要低。", size: 100 },
    { name: "天王星", info: "自转轴几乎躺平的冰巨星，表面呈淡蓝色。", size: 50 },
    { name: "海王星", info: "距离太阳最远的行星，拥有太阳系最强的风暴。", size: 48 }
]

// 动态生成行星卡片
const planetContainer = document.getElementById("planetContainer")
const planetDetail = document.getElementById("planetDetail")
const detailName = document.getElementById("detailName")
const detailInfo = document.getElementById("detailInfo")

planets.forEach(planet => {
    const card = document.createElement("div")
    card.className = "planet-card"
    card.innerHTML = `<h3>${planet.name}</h3>`
    // 点击交互 展示详情
    card.addEventListener("click", () => {
        detailName.innerText = planet.name
        detailInfo.innerText = planet.info
        planetDetail.style.display = "block"
    })
    planetContainer.appendChild(card)
})

// 动态生成简易柱状图 纯CSS+JS实现 不需要图表库
const chartContainer = document.getElementById("chartContainer")
const maxSize = Math.max(...planets.map(p => p.size))

planets.forEach(planet => {
    const bar = document.createElement("div")
    bar.className = "chart-bar"
    // 按比例计算柱子高度
    bar.style.height = `${(planet.size / maxSize) * 250}px`
    bar.innerHTML = `<span>${planet.name}</span>`
    chartContainer.appendChild(bar)
})