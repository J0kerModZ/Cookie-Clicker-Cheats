var unwantedUpgrades = [74, 84, 182, 183, 184, 185, 209, 332, 563, 361, 806, 333, 414];
	 var upgradePurchaseInterval = setInterval(function() {
		    if (!Game.OnAscend) {
		        var upgrades = Game.UpgradesInStore.filter(function(upgrade) {
		            return !upgrade.bought && upgrade.canBuy() && !unwantedUpgrades.includes(upgrade.id);
		        });
		        if (upgrades.length > 0) {
		            var randomIndex = Math.floor(Math.random() * upgrades.length);
		            upgrades[randomIndex].buy();
		        }
		    }
		}, 0.1);