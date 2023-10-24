import axios from "axios"
import {
  TST_TC473_CZSAVNJCFF_USERNAME,
  TST_TC473_CZSAVNJCFF_PASSWORD
} from "react-native-dotenv"
const tSTTCczsavnjcff = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC473_CZSAVNJCFF_USERNAME,
    password: TST_TC473_CZSAVNJCFF_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function tsttc473czsavnjcff_get_getUserDetails_read(payload) {
  return tSTTCczsavnjcff.get(`/getUser${payload.Details}`)
}
export const apiService = { tsttc473czsavnjcff_get_getUserDetails_read }
