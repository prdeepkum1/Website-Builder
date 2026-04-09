
// const extractJson = async (text) => {
//     if (!text) {
//         return
//     }
//     const cleaned = text.
//         replace(/```json/gi, "")
//         .replace(/```/g, "")
//         .trim();

//         const openBracket = cleaned.indexOf('{')
//         const closeBracket = cleaned.lastIndexOf('}')
//         if(openBracket === -1 || closeBracket === -1) return null
//         const jsonString = cleaned.slice(openBracket, closeBracket+1)
//         return JSON.parse(jsonString)
// }

// export default extractJson


const extractJson = (text) => {
    try {
        if (!text) {
            throw new Error("Empty AI response")
        }

        const cleaned = text
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim()

        const openBracket = cleaned.indexOf('{')
        const closeBracket = cleaned.lastIndexOf('}')

        if (openBracket === -1 || closeBracket === -1) {
            throw new Error("No JSON found in response")
        }

        const jsonString = cleaned.slice(openBracket, closeBracket + 1)

        return JSON.parse(jsonString)

    } catch (error) {
        console.log("Extract JSON Error:", error.message)
        throw new Error("Invalid JSON from AI")
    }
}

export default extractJson