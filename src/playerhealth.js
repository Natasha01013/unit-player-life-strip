export function playerHealth(obj) {
    let result = "";
    if(obj.health > 50) {
        return result = "healthy";
    } else if(obj.health >= 15 && obj.health <= 50) {
        return result = "wounded";
    } else if(obj.health < 15) {
        return result = "critical";
    } else {
        return result;
    }
}