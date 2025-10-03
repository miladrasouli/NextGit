

export async function createContractServerAction(payload: unknown) {
    try {
        const responseOfCreateContract = await fetch(process.env.NEXT_PUBLIC_API_URL + "contract/create", {
            method: "POST",
            headers: {
                Authorization: `Bearer token`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        if (!responseOfCreateContract.ok) {
            console.error("Error while creating contract: ", responseOfCreateContract.statusText)
        }
        const resultOfCreateContract = await responseOfCreateContract.json()
        
        console.log("result of create contract: ", resultOfCreateContract)
    } catch (error) {
        console.error("Error while creating contract: ", error)
    }
}