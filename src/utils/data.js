const BASE_URL = 'https://tecnologia-sustantivo-femenino.herokuapp.com/'

export const getEduWomanData = async (country) => {
    const result = await fetch(`${BASE_URL}/eduwoman/${country}`)
    const data = await result.json()
    return data
}
