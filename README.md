> ## kto-ms
> <a href="https://discord.gg/H9Scw4mztH"><img src="https://img.shields.io/discord/944271427429871658?color=5865F2&logo=discord&logoColor=white" alt="Discord Server"/></a>
>
> It converts whatever string into milliseconds which is entirely based off of comparing two Date objects into number! As long as it is a valid string!
#

> ## Installation
> 
> ```
> npm i kto-ms --save
> ```

#

> ## Usage
> ```js
> const ms = require('kto-ms')
> 
> console.log(ms('1s')) // 1000
> console.log(ms('1 s')) // 1000
> console.log(ms('1 days')) // 86400000
> console.log(ms('1 year')) // 31536000000
> ```