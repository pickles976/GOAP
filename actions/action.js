
class Action {

    constructor() {}

    get_cost(_blackboard) {
        return 1000
    }

    get_preconditions() {
        return {}
    }

    get_effects() {
        return {}
    }

    perform(actor) {
        return false
    }

}