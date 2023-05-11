"use strict";

import Event from "../Listeners/event.js";
import Challenges from "../Listeners/Challenges.js";
import Api from "../../API/Api.js";

// Instance || Objects
const event = new Event();
const challenges = new Challenges();

// INITIALIZATION
event._init();

challenges._chechAnswer1()
