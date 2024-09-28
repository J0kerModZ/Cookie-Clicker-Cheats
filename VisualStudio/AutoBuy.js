buildingPurchaseInterval = setInterval(function() {
        if (!Game.OnAscend) {
            var buildings = Game.ObjectsById;
            var affordableBuildings = buildings.filter(building => building.price <= Game.cookies);
            if (affordableBuildings.length > 0) {
                var randomIndex = Math.floor(Math.random() * affordableBuildings.length);
                affordableBuildings[randomIndex].buy();
            }
        }
         else {
            clearInterval(buildingPurchaseInterval);
        }
    }, 1);