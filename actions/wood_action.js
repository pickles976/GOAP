import { Action } from  "./action"

export class WoodAction extends Action {

    constructor(){
        super()
    }

    get_cost() {
        return 1
    }

    get_preconditions() {
        return {}
    }

    get_effects() {
        return {
            "wood": 1
        }
    }

    perform(actor) {
        actor.state["wood"] = 1
        return true
    }

}