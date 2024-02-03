import { Action } from  "./action"

class RoadAction extends Action {

    constructor(){}

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
            "road": 1,
            "wood": 0,
            "brick": 0
        }
    }

    perform(actor) {
        actor.state["road"] = 1
        actor.state["wood"] = 0 
        actor.state["brick"] = 0
    }

}