// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let headQuarters = 42;
    let pickupLocation;
    if (blocks > headQuarters) {
        pickupLocation = blocks - headQuarters;
      } else {
        pickupLocation = headQuarters - blocks;
        }
    return pickupLocation;
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startingBlock,endingBlock) {
    if (startingBlock < endingBlock) {
        return (endingBlock - startingBlock) * 264;
    } else {
        return (startingBlock - endingBlock) * 264;
    }
}

function calculatesFarePrice(startingBlock,endingBlock) {
    let distance = distanceTravelledInFeet(startingBlock,endingBlock);
    if (distance <= 400) {
      return 0
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
      } else if (distance > 2000 && distance < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
}