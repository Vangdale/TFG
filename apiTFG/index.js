const PORT = 8080 //HEROKU
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

const results = []
const results2 = []
const results3 = []
const results4 = []

var number = [1, 0, 1, 1]
const topNumber = [2, 1, 2, 2] //170,116,280,135



for (var actualPage = 0; actualPage <= 3; actualPage++) {
    console.log(actualPage)
    while (number[actualPage] <= topNumber[actualPage]) {

        const pages = [
            {
                name: 'Instant-Gaming',
                address: 'https://www.instant-gaming.com/es/busquedas/?page=' + number[0],
                base: ''
            },
            {
                name: 'Steam',
                address: 'https://store.steampowered.com/games/?l=eu#p=' + number[1] + '&tab=TopSellers',
                base: ''
            },
            {
                name: 'Humble Bundle',
                address: 'https://www.humblebundle.com/store/search?sort=bestselling&hmb_source=navbar&page='+ number[2],
                base: 'https://www.humblebundle.com'
            },
            {
                name: 'GOG',
                address: 'https://www.gog.com/en/games?page='+ number[3],
                base: ''
            },
        ]

        const nombre = pages[actualPage].name
        const base = pages[actualPage].base

        console.log("website nº: " + number[actualPage])
        console.log(pages[actualPage])

        axios.get(pages[actualPage].address).then(response => {

            const html = response.data
            const $ = cheerio.load(html)

            if (nombre == "Instant-Gaming") {
                $('.item', html).each(function () {
                    const title = $(this).find('.fallback').text()
                    const url = $(this).find('a').attr('href')
                    const price = $(this).find('.price').text()
                    const picture = $(this).find('img').attr('src')

                    results.push({
                        title,
                        link: base + url,
                        price: price,
                        pictureUrl: picture,
                        Website: nombre
                    })
                })
            }

            if (nombre == "Steam") {
                $('.tab_item  ', html).each(function () {
                    const title = $(this).find('.tab_item_name').text()
                    const url = $(this).attr('href')
                    const price = $(this).find('.discount_final_price').text()
                    const picture = $(this).find('.tab_item_cap_img').attr('src')

                    results2.push({
                        title,
                        link: base + url,
                        price: price,
                        pictureUrl: picture,
                        Website: nombre
                    })
                })
            }

            if (nombre == "Humble Bundle") {
                $('.entity js-entity on-sale', html).each(function () {
                    const title = $(this).find('.entity-title').text()
                    const url = $(this).find('a').attr('href')
                    const price = $(this).find('price').text()
                    const picture = $(this).find('.entity-image').attr('src')

                    results3.push({
                        title,
                        link: base + url,
                        price: price,
                        pictureUrl: picture,
                        Website: nombre
                    })
                })
            }

            if (nombre == "GOG") {
                $('.product-tile', html).each(function () {
                    const title = $(this).find('.product-tile__title').text()
                    const url = $(this).attr('href')
                    const price = $(this).find('.product-tile__price--final').text()
                    const picture = $(this).find('.product-tile__image-wrapper').attr('src')

                    results4.push({
                        title,
                        link: base + url,
                        price: price,
                        pictureUrl: picture,
                        Website: nombre
                    })
                })
            }
        }).catch(err => console.log(err))
        number[actualPage]++
    }

    
}

app.get('/', (req, res) => {
    res.json("Api version alfa")
})

app.get('/Instant', (req, res) => {
    res.json(results)
})

app.get('/Steam', (req, res) => {
    res.json(results2)
})

app.get('/Humble', (req, res) => {
    res.json(results3)
})

app.get('/GOG', (req, res) => {
    res.json(results4)
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))