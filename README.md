# goap

[GOAP reference code](https://github.com/viniciusgerevini/godot-goap)

# Stuff

WORLD STATE
```json
{
    "ACTOR_STATE": {
        "wood": 0,
        "wheat": 0,
        "stone": 0,
        "brick": 0,
        "houses": 0,
        "cities": 0,
        "roads": 0
    }
}
```

ACTIONS
```json
{
    "BUILD_ROAD": {
        "preconditions" {
            "wood": 1,
            "brick": 1
        },
        "effects": {
            "roads": 1
        }
    }
}
```

GOALS
```json
{
    "GET_ROAD" : {
        "desired_state": {
            "roads": 1
        },
        "priority" : 1,
        "is_valid" : "condition"
    }
}
```


To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# NOTES

ACTION - 
    precondition - state that must be met before action can take place
    effect - how action affects world/agent state
    cost - heuristic

PLANNER - 
    Takes in goals and outputs actions. Works backwards from goal. Essentially it builds an FSM dynamically.
    Uses A*

Think of Actions like dominoes with preconditions on one side and effects on the other, they can be chained together.

AGENT - has a set of goals
GOAL - end world state


Actions -> Planner
Goals -> Planner
World State -> Planner
