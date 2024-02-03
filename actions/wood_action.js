import { Action } from  "./action"

class WoodAction extends Action {

    constructor(){}

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
    }

}