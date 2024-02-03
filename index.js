import { Planner } from "./planner"
import { Agent } from "./agent"

import { RoadGoal } from "./goals/road_goal"

import { BrickAction } from "./actions/brick_action"
import { WoodAction } from "./actions/wood_action"
import { RoadAction } from "./actions/road_action"


console.log("Starting GOAP test!");

// Create Action Planner with actions
const planner = new Planner([new BrickAction(), new WoodAction(), new RoadAction()])

// create agents
const agent = new Agent(planner, [new RoadGoal()])

// run loop
console.log(`Initial Agent state: ${JSON.stringify(agent.state)}`)

agent.process()
planner.print_plan(agent.current_plan)

while (agent.state["roads"] == 0) {
    agent.process()
    console.log(agent.state)
}
