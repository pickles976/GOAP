import { Goal } from  "./goal"

export class RoadGoal extends Goal {

    constructor(){
        super()
    }

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