

export class Planner {
    constructor(actions) {
        this.actions = actions
    }

    get_plan(goal, state) {
        // TODO: implement
        console.log(`Goal: ${goal}`)

        let desired_state = {...goal.get_desired_state()}
        if (desired_state == {}) {
            return []
        }

        return this.find_best_plan(goal, desired_state, state)
    }

    find_best_plan(goal, desired_state, state) {
        // Create end goal as root node
        let root = {
            "action": goal,
            "state": desired_state,
            "children": []
        }

        if (this.build_plans(root, {...state})) {
            let plans = this.transform_tree_into_array(root, state)
            return this.get_cheapest_plan(plans)
        }

        return []
    }

    get_cheapest_plan(plans){
        let best_plan = null
        for (const p of plans){
            if (best_plan == null || p.cost < best_plan.cost) {
                best_plan = p
            }
        }
        return best_plan.actions
    }

    build_plans(step, state) {
        let has_followup = false

        // each node in the graph has its own desired state
        let current_state = {...step.state}

        // Subtract current state from desired state (leaving us with the state delta)
        for (const s in step.state) {
            if (current_state[s] == state[s]) {
                delete current_state[s]
            }
        }

        // If state delta is empty, then the branch has already reached the solution
        if (Object.keys(current_state).length == 0) {
            return true
        } 

        for (const action of this.actions) {
            // if (~action.is_valid()) {
            //     continue
            // }
            let should_use_action = false
            let effects = action.get_effects()
            let desired_state = {...current_state}

            // see if effect of action satisfies a key in our desired state
            for (const s in desired_state) {
                if (desired_state[s] == effects[s]) {
                    delete desired_state[s]
                    should_use_action = true
                }
            }

            if (should_use_action) {
                let preconditions = action.get_preconditions()
                for (const p in preconditions) {
                    desired_state[p] = preconditions[p]
                }

                // recurse
                let s = {
                    "action": action,
                    "state": desired_state,
                    "children": []
                }

                // if desired state is empty then this action can be added to the graph, otherwise we recurse
                if (Object.keys(desired_state).length == 0 || this.build_plans(s, {...state})) {
                    step["children"].push(s)
                    has_followup = true
                }
            }

        }
        return has_followup
    }

    transform_tree_into_array(p, state) {
        let plans = []

        if (p.children.length == 0) {
            plans.push({"actions": [p.action], "cost": p.action.get_cost(state)})
            return plans
        }

        for (const c of p.children) {
            for (const child_plan of this.transform_tree_into_array(c, state)){
                child_plan.actions.push(p.action)

                // handle root case
                if (p.action.hasOwnProperty('get_cost')) {
                    child_plan.cost += p.action.get_cost(state)
                }
                plans.push(child_plan)
            }
        }
        return plans
    }

    print_plan(plan) {
        let cost = 0
        let actions = []
        for (const a of plan) {
            // TODO: why does it say get_cost() is undefined???
            // console.log(a)
            // cost += a.get_cost()
            actions.push(a.constructor.name)
        }
        console.log({"cost": plan.cost, "actions": actions})
    }


}