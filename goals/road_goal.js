import { Goal } from  "../goals/goal"

class RoadGoal extends Goal {

    constructor(){}

    is_valid() {
        return true
    }

    priority() {
        return 1
    }

    get_desired_state() {
        return {
            "roads": 1
        }
    }

}