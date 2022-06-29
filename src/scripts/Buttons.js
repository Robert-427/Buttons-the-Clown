import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"
import { Completions } from "./Completions.js"

export const Buttons = () => {
    return `
        <h1>Buttons and Lollipop Clown Services</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        <section class="serviceRequests">
            <h2 class="service-header">Service Requests</h2>
            ${Requests()}
            ${Completions()}
        </section>
    `
}