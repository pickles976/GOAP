import { Action } from  "./action"

export class RoadAction extends Action {

    constructor(){
        super()
    }

    get_cost() {
        return 1
    }

    get_preconditions() {
        return {
            "wood": 1,
            "brick": 1
        }
    }

    get_effects() {
        return {
            "roads": 1,
            "wood": 0,
            "brick": 0
        }
    }

    perform(actor) {
        actor.state["roads"] = 1
        actor.state["wood"] = 0 
        actor.state["brick"] = 0
        return true
    }

}