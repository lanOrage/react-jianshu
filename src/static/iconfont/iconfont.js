import {createGlobalStyle} from 'styled-components'

export const IconFontStyle= createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1574155078993'); /* IE9 */
  src: url('./iconfont.eot?t=1574155078993#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAhEAAsAAAAADmwAAAf1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEAgqObIwAATYCJAMkCxQABCAFhG0HfxsjDFGUL1aF7MdBTuZqjrssa1TeoDoyC3FXVvyfX/HwNff452Y34QKCAoXkqlABkH2VxMpV11gYz/67PznAbd02MCJndAGPUZQ24AajhaEfVYnfzeDa79+g7cB390hES64Jkk1waTSx1bs6AU94hS+mk5/2c3Xat9A24OGJHwo1fvG7j/htmEjDM4mQCWkilpcQi1AhlEgrqNRmc2XiiNuPkZtAZ6lYyEFWBQ+sZLIa2HSTkonBKtApZ1hD01IlxMzT4i0wNcUz9DyAN9bvxz9IDisKZSKHPH65rAMKfzJMG9Jg82DNhg745giu7kjYDOSr9j7R+RIwR9lsoS5pJcNZYLpCMJoK7mCKMWWYuKYm04bRHGmWflKgqMTC6LIa1LKm112qbv54UZHRAPPd+YafDK2Rmp8OqiiOAZeN09GuAM5AuxKYi3YVcBPaJeANELYZtUaMmcAaUBwCSItB1g5apJA1VlHmIt1YHWplNcfWL8Q71cOOsQLDUcdiOupMNBwORYd/ZZnfSDilPfOWWIuY1mGGPIguKb3UAVOu75vDT0wnVRvCYOOoc2ksRJTJj8MLQi4EwtL2frXsue8hMhfSLAzXgpFRVQxPioZnngdJCgz4xib+BThjHMat5P46NbkJkvcAzHAQR4uvHPcdPiEDQ68N2cqPu29a5wXc5PDe/DEp+7Z8YenOA8DdPwdhbMqwiCN66+q39g11BomDw4u09uSpDT6fs7M9PrpcVDHC55699i3PP4c3Br8wjQWe5rnv+O8rvCs5cviL6TemCot9maSXNN+irz1wN6kx2FqS+A4ikzu+7j3zMzElOreVw3JJjkIwZCg7CUBEpI6oglmxQEp0LGSYqznKWVjLgbEIF+p0nQZaRQrNC4SCRcd9hHL1kRFoFzXiotnekOqyaR6CfB7La2ic492geoYZqzwa5/ogM5fzCDLSHgWN09BFb5vuLhW1zfYSMYHpK8qs9EVmreR3KIV+tWHGSs9ZMyU84eqFWek+Y4ancJZHreN8wZqoAXZPF3uq5218rNt0+2LsdWameuxen9lMJ9zm5M1gbNkttuOJG0Ho4uulNstn+jvM3t13+X5AJwdsbb/ciOPPGecr3HQrw3bcIQR7ejBc3YPdfMq7+Zg3VCtgaoa2Z0iSrjhVJ5Un5ZciomTk49QihHiuEmfMESrMGD8JLSpomqBnFnptbqpp4WW9SnZex1APq2BJvOJoq0jOK4UmTp8cilH+N2UKTe9xfiJaWKiY0GlR5LW4ubaSPs9rOEyyr0SWXiEczOdLbiryq/losYTKv8X4s9tAn8hMQJj74rVRAsq+xba8MPt5q5A+5+3+xyfsU1gAmKMAhifTp6eGN8tVl6lV3AvV3PPnS5rD5dTF4cSkOX16t53jVn9A3rIDuv05UUhUAGftELljbYBvxp8zmuMvtnEC1tbUdHt16/Ja9wtPhtS3XAuZHxneP25puHBE3dS04WljcGXE4FJ7/yn7XbtcDxcVlHW7dffpw+aPra41S7gnh62ThdUuJSmyulAwomRJ6vAxvJLRwdXySXgpgxvwuBezNMhKVpXc1Kw8kL1rl8ztvVtXa1uXG2S99di5UxNNF2Nzzp+fAxm7dGFzvOFiOtqU7GqtP9//7yq077JlfVlG2YH1xZgxaYSCjC3h9xRbGMpVBy5fRic6roZ/sLHx8MYWwcsMvYypFr/KySFKZdOcUE7NvSEzRt9TmLXWBwKYDaGUOdUmtf01RSEhEUEGIV4CnM+8oeQw8d4UxgYdK3OBvHJwiHaGN3LYIRDxdh5kPcI88f8RuWyiZiKSyfCmD1up9bOwG2f/Pn3m8oTRHjn5MvP1kf8OQClFLmAMN/dDKblswsCBiHVeTx+ZSDut8ktb2zExvuUtaer/yPzJfnP4/39lv62WT94yeveAAW1GgcB5cLAvDIsVbP2v7dzSd31eHNc4lVR0W8gee+ztlllrB0xoM7oMDmKxsDvYKljg1LlFvjNHX8ZLgZtaZg/AsXk7vjZzM9jBHw01ZSy3Y276aM2fQpZDo8RCw0d2UGYO9+sK7/r4yc7ex7ydfQyPJQnXs7mXQy6TfJ2djw0+Sa4nQ86+f6lxDj1NkqlnFNqgnTBxMGgCwLgvHcC4lt2ceRiDuRvpa4oJWgdgmPvbaTkWAECaoC9oZmf6l8KxcDBnY8rThi8H/lv8b8ox95uV7V/Jve+/rrNE57izGIKjGivMnySO5NEA5O03kZX2e3kaW4kaaP0Aj5kCnXKLk8PQTA+bbZ1zWJHQBPgrFGpLIGms1mfzZij1tkGlsQc6m7Dj92bRw0RusdEIgjDdJihM9RWS6S7os/kBlOZ6B5XpgUHnRLim2FsblE2JnhDTRAcu6YNTUq2GVHtoG3tzHSEzqsR6v2jZBITeQE3iSfGJ4UU2oSH0TYQxdMmSaZrESb1WjbMoP0Kl0uI6vVZBSOl4OU3rshMSyKSw8VKtGmwcoEcQo426HXASfagUKS0N8m6aTeTn6xBkjFTE9BmnvqkCBD0D6uG4JPESC+jZSFPo1KHsNOgik4wWhIRrM3paakdjMSGolDktnC7ZmwJBihZPXmFGJ1uCOI8siuK719T7Gtl9Z8plaqOIFDnKqKKOJtroNJd6S+VijYxAi8TWKm0X0bYmO5i9KaIvZUPGDneIFZSRlnM3QUkosZam4uJIo4TQxFnq3h5VRo1Fb0puFGsAAAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1574155078993') format('woff'),
  url('./iconfont.ttf?t=1574155078993') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1574155078993#iconfont') format('svg'); /* iOS 4.1- */
}


.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconexchange:before {
  content: "\e6ad";
}

.iconAa:before {
  content: "\e636";
}

.iconlove_icon:before {
  content: "\e65b";
}

.iconxiezi:before {
  content: "\e60e";
}

.iconfangdajing:before {
  content: "\e637";
}

.iconweibiaoti--fuben-:before {
  content: "\e64a";
}

.iconpinglun:before {
  content: "\e604";
}

.iconxihuan:before {
  content: "\e62b";
}

`;
