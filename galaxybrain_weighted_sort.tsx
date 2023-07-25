
    let knight_weight = 1;
    let dmage_weight = 1;
    let wmage_weight = 1;
    let rmage_weight = 1;

    let character_weights = [
        knight_weight,
        dmage_weight,
        wmage_weight,
        rmage_weight
    ];
    //Breakpoint and the weight associated with it
    const CharacterWeightsMap: Map<number, number> = new Map([
        [350, 1],
        [300, 2],
        [250, 3],
        [200, 4],
        [150, 5],
        [100, 6],
        [50, 7]
    ])
    //determines how likely each character is to be targeted
    function DetermineWeights() {
        current_statuses.forEach((condition, index) => {
            if (condition.includes("poison")) {
                character_weights[index] += 2;
            }
            if (condition.includes("freeze")) {
                character_weights[index] += 3;
            }
            if (condition.includes("curse")) {
                character_weights[index] += 4;
            }
        })
        current_hp.forEach((hp, index) => {
            CharacterWeightsMap.forEach((weight, breakpoint) => {
                if (hp <= breakpoint) {
                    character_weights[index] += weight;
                    console.log("character_weights", character_weights)

                }
            }
            )
        })
    }

    //Target first, then the attack 

    //use a randomizer and set the max to the sum of all the weights

    /*GALAXY BRAIN TIME*/
    function Targeting() {
        //Get max range for the randomizer
        const total_weights = character_weights.reduce((a, b) => a + b, 0);
        //Get a random value between 1 and the total weights
        const random_value = Randomizer(1, total_weights);

        //Sort the weights in descending order 
        //and calculate cumulative weights
        const weights_with_cumulative = character_weights
            //Map to an original array of objects 
            .map((weight, index) => (
                {
                    weight,
                    index
                }
            )
            )
            //Sort those objects high to low
            .sort((a, b) => b.weight - a.weight)
            //Map until the cumulative weight is calculated
            //item, index, and the array itself
            .map((item, index, arr) => (
                {
                    ...item,//represents each object
                    //add the cumulative weight of all characters 
                    //to each object. This is what the boss picks from
                    //Do this for each array item until it reaches the end
                    cumulative_weight: arr.slice(0, index + 1).reduce(
                        (total, current) => total + current.weight, 0),
                }
            ));

        for (let weight of weights_with_cumulative) {
            //Compare the value from above to the cumulative weight 
            //The higher the individual weight, the higher the chance
            //it has to hit
            if (random_value <= weight.cumulative_weight) {
                chosen_target = potential_targets[weight.index];
                console.log("chosen_target", chosen_target);
                break;
            }
        }
    }
