require('dotenv').config()
const tokenList = require('./tokenList/quickswap-default.tokenlist.json')
const apiKey = process.env.POLYGONSCAN_API_KEY

fetch(
  `https://api.polygonscan.com/api?module=stats&action=maticprice&apikey=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => console.table(data))

function getTokenBySymbol(symbol, tokenList) {
  let requestedTokens = []
  tokenList.tokens.forEach((token) => {
    if (token.symbol === symbol) {
      requestedTokens.push(token)
    }
    return 
  })
  console.log(requestedTokens)
}
getTokenBySymbol('ETH', tokenList)
