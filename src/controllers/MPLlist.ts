import scrapeIt from "scrape-it";
import { Response, Request } from "express";
import CurrencyConverter from "currency-converter-lt";

const MPLController = {
    getAllMPLList: async(req: Request,res: Response) => {
        scrapeIt("https://liquipedia.net/mobilelegends/MPL_Indonesia",{
            MPL_data: {
                listItem:"#mw-content-text > div > div:nth-child(10) > div > div",
                data:{
                   title:" div.divCell.Tournament.Header > b > a",
                   link:{
                    selector:" div.divCell.Tournament.Header > b > a",
                    attr:"href"
                   },
                   date:" div.divCell.EventDetails.Date.Header",
                   prize:{
                    selector:"div.divCell.EventDetails.Prize.Header",
                    convert: (val) => val.replaceAll("$","") + " USD"
                   },
                   playerNumber:{
                    selector:"div.divCell.EventDetails.PlayerNumber.Header",
                    convert: (val) => val.split(`\u00A0`).join(" ")
                   },
                   location:"div.divCell.EventDetails.Location.Header"
                }
            }
        }).then(({data}:any) => {
            const dataCopy = data.MPL_data
            dataCopy.shift()
            res.json(dataCopy)
        })
        }
    }

export default MPLController