import { getRequests, getClowns, saveCompletion } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId, childName] = event.target.value.split("--")
            const completion = {
                requestId: parseInt(requestId),
                clownId: parseInt(clownId),
                child: childName,
                date_created: Date.now()
            }
            saveCompletion(completion)
        }
    }
)


export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns()
    const convertRequestToListElement = (request) => {

        return `
        <li class="list">
            Party for little ${request.child} needed by ${request.neededBy}
            <div>
            <select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${clowns.map(clown => {
            return `<option value="${request.id}--${clown.id}--${request.child}">${clown.name}</option>`
        }
        ).join("")
            }
            </select>
            <button class="request__delete" id="request--${request.id}">
                Deny
            </button>
            </div>
        </li>`
    }
    const sortByDate = (arr) => {
        const sorter = (a, b) => {
            return new Date(a.neededBy).getTime() - new Date(b.neededBy).getTime();
        }
        arr.sort(sorter)
    }

    sortByDate(requests)

    let html = `
        <ul class="request_list">${requests.map(convertRequestToListElement).join("")}</ul>`
    return html
}
