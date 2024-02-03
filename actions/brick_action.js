import { Action } from  "./action"

export class BrickAction extends Action {

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
            "brick": 1
        }
    }

    perform(actor) {
        actor.state["brick"] = 1
        return true
    }

}