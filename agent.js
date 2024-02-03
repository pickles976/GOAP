

export class Agent {

    constructor(planner, goals) {
        this.planner = planner
        this.goals = goals
        this.current_goal = null
        this.current_plan = null
        this.current_plan_step = 0

        this.state = {
            "wood": 0,
            "brick": 0, 
            "roads": 0
        }
    }

    process(){
        /**
         * Change goals and build a plan
         */

        let goal = this.get_best_goal()
        if (this.current_goal == null || goal != this.current_goal) {

            // TODO: in some implementations, we would input the world state into the planner and also inject the state of our agent.
            // So the plan would account for global resources and agent inventory.
            this.current_goal = goal
            this.current_plan = this.planner.get_plan(this.current_goal, this.state)
            this.current_plan_step = 0

        } else {
            this.follow_plan(this.current_plan)
        }


    }

    get_best_goal(){
        let highest_priority = null

        for (const goal of this.goals) {
            if (goal.is_valid() && (highest_priority == null || goal.priority() > highest_priority.priority())) {
                highest_priority = goal
            }
        }
    
        return highest_priority
    }

    follow_plan(plan){
        
        if (plan.length == 0) {
            return
        }

        let is_step_complete = plan[this.current_plan_step].perform(this)
        if (is_step_complete && this.current_plan_step < plan.length - 1) {
            this.current_plan_step += 1
        }

    }

}