const api = require("./api")
// @ponicode
describe("api.getDecks", () => {
    test("0", () => {
        let callFunction = () => {
            api.getDecks()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.getDeck", () => {
    test("0", () => {
        let callFunction = () => {
            api.getDeck("Dynamic Quality Specialist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.getDeck("Future Interactions Representative")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.getDeck("Internal Interactions Strategist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.getDeck("Direct Functionality Orchestrator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.getDeck("International Intranet Coordinator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.getDeck(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.saveDeckTitle", () => {
    test("0", () => {
        let callFunction = () => {
            api.saveDeckTitle("Future Interactions Representative")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.saveDeckTitle("Dynamic Quality Specialist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.saveDeckTitle("Direct Functionality Orchestrator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.saveDeckTitle("Internal Interactions Strategist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.saveDeckTitle("International Intranet Coordinator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.saveDeckTitle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.addCardToDeck", () => {
    test("0", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: "Dynamic Quality Specialist", card: "North" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: "Dynamic Quality Specialist", card: "West" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: "Direct Functionality Orchestrator", card: "North" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: "International Intranet Coordinator", card: "North" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: "Future Interactions Representative", card: "West" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.addCardToDeck({ title: undefined, card: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.removeDeck", () => {
    test("0", () => {
        let callFunction = () => {
            api.removeDeck("International Intranet Coordinator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            api.removeDeck("Direct Functionality Orchestrator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            api.removeDeck("Internal Interactions Strategist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            api.removeDeck("Dynamic Quality Specialist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            api.removeDeck("Future Interactions Representative")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            api.removeDeck(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
