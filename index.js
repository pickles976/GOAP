import { Planner } from "./planner"
import { Agent } from "./agent"

import { RoadGoal } from "./goals/road_goal"

import { BrickAction } from "./actions/brick_action"
import { WoodAction } from "./actions/wood_action"
import { RoadAction } from "./actions/road_action"


console.log("Hello via Bun!");

// Create Action Planner with actions
const planner = Planner([BrickAction(), WoodAction(), RoadAction()])

// create agents
const agent = Agent(planner, [RoadGoal()])

// run loop
while (agent.state["road"] == 0) {
    agent.process()
    console.log(agent.state)
}
