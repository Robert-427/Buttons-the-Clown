import { fetchClowns, fetchCompletions, fetchRequests, deleteRequest, deleteCompletion } from "./dataAccess.js"
import { Buttons } from "./Buttons.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("completion--")) {
        const [, completionId] = click.target.id.split("--")
        deleteCompletion(parseInt(completionId))
    }
})

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = Buttons()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
