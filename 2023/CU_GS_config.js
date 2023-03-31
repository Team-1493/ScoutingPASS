var config_data = `
{
  "enable_google_sheets": "true",
  "title": "1493 scouting thing",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023nytr",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "matchNum",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "teamNum",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "autoStartPosition",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "gsCol": "autoScoringGrid",
      "code": "asg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Crossed Cable",
      "gsCol": "autoCrossedCable",
      "code": "acc",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "gsCol": "autoCrossedChargingStation",
      "code": "acs",
      "type": "bool"
    },
    { "name": "Mobility?",
      "gsCol": "autoMobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "Docked",
      "gsCol": "autoDocked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "gsCol": "cycleTimes",
      "code": "tct",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "gsCol": "gridScoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "gsCol": "feedCount",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "gsCol": "wasDefended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Who Defended this bot<br>(Team #)",
      "gsCol": "defenderTeamNum",
      "code": "who",
      "type": "text"
    },
    { "name": "Smart Placement<br>(creates Links)",
      "gsCol": "smartPlacement",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Floor Pick UP",
      "gsCol": "floorPickUp",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "gsCol": "dockingTime",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "endgameStatus",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "gsCol": "numOfRobotsDocked",
      "code": "dn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "driverSkill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "gsCol": "linksScored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "gsCol": "defenseRating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "gsCol": "swerveDrive",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "gsCol": "speedRating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "diedOrImmobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "tippy",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Cones (>2)",
      "gsCol": "droppedCones",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "gsCol": "goodPartners",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
