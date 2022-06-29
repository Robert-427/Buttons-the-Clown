import { getCompletions } from "./dataAccess.js";

export const Completions = () => {
    const completions = getCompletions()

    const completionString = (completion) => {
        return `
            <li class="list">
                Party for ${completion.child} has been completed
            <button class="completion__delete" id="completion--${completion.id}">
                Delete
            </button>
            </li>`
    }
    let html = `<ul class="complete_list">${completions.map(completionString).join("")}</ul>`
    return html
}
