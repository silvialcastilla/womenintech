const BASE_URL = 'https://tecnologia-sustantivo-femenino.herokuapp.com'

export const getEduWomanData = async (country) => {
    try{
        const result = await fetch(`${BASE_URL}/eduwoman/${country}`)
        const data = await result.json()
        return data
    } catch(err){
        console.log("Error fetching eduwoman data:", err)
        return false
    }
}

export const getWomenTic = async (country) => {
    try{
        const result = await fetch(`${BASE_URL}/ictwoman/${country}`)
        const data = await result.json()
        return data
    } catch(err){
        console.log("Error fetching ictwoman data:", err)
        return false
    }
}
export const getManagerial = async (country) => {
    try{
        const result = await fetch(`${BASE_URL}/managerial/${country}`)
        const data = await result.json()
        return data
    } catch(err){
        console.log("Error fetching managerial data:", err)
        return false
    }
}
export const getGdp = async (country) => {
    try{
        const result = await fetch(`${BASE_URL}/gdp/${country}`)
        const data = await result.json()
        return data
    } catch(err){
        console.log("Error fetching gbp data:", err)
        return false
    }
}