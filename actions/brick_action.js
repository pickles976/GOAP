import { Action } from  "./action"

class BrickAction extends Action {

    constructor(){}

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
    }

}