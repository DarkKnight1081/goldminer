var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost1: 10,
    goldPerClickCost2: 25,
    goldPerClickCost3: 100,
    upgrade1Level: 0,
    upgrade2Level: 0,
    upgrade3Level: 0,
    reincarnateCost: 200000,
    reincarnatedTimes: 0
    
  }
  
document.getElementById("reincarnate").style.display="none"
function reincarnate() {
  if (gameData.gold >= gameData.reincarnateCost) {
    gameData.gold = 0
    gameData.reincarnatedTimes += 1
    gameData.reincarnateCost *= 25
    gameData.goldPerClick *= 5
    gameData.upgrade1Level = 0
    gameData.upgrade2Level = 0
    gameData.upgrade3Level = 0
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("reincarnatedtime").innerHTML = "You have reincarnated " + gameData.reincarnatedTimes + " times."
    document.getElementById("reincarnation").innerHTML = "Reincarnate with (" + gameData.reincarnateCost + ") Gold."
  }
}
function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }
function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost1) {
      gameData.gold -= gameData.goldPerClickCost1
      gameData.goldPerClick += 1
      gameData.goldPerClickCost1 *= 2
      gameData.upgrade1Level += 1
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.upgrade1Level + ") Cost: " + gameData.goldPerClickCost1 + " Gold"
    }
  }
    
function buyGoldPerClick2() {
    if (gameData.gold >= gameData.goldPerClickCost2) {
      gameData.gold -= gameData.goldPerClickCost2
      gameData.goldPerClick += 5
      gameData.goldPerClickCost2 *= 4
      gameData.upgrade2Level += 1
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade2").innerHTML = "Upgrade Workers (Currently Level " + gameData.upgrade2Level + ") Cost: " + gameData.goldPerClickCost2 + " Gold"
    }
  }
function buyGoldPerClick3() {
    if (gameData.gold >= gameData.goldPerClickCost3) {
      gameData.gold -= gameData.goldPerClickCost3
      gameData.goldPerClick += 25
      gameData.goldPerClickCost3 *= 9
      gameData.upgrade3Level += 1
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade3").innerHTML = "Upgrade Truck (Currently Level " + gameData.upgrade3Level + ") Cost: " + gameData.goldPerClickCost3 + " Gold"
    }
  }
var mainGameLoop = window.setInterval(function() {
    mineGold()
  }, 10)
  if (gameData.Coin >= 200000) {
    document.getElementById("reincarnate").style.display = "inline-block"
  }

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave2", JSON.stringify(gameData))
  }, 150)
var savegame = JSON.parse(localStorage.getItem("goldMinerSave2"))
  if (savegame !== null) {
    gameData = savegame
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.upgrade1Level + ") Cost: " + gameData.goldPerClickCost1 + " Gold"
    document.getElementById("perClickUpgrade2").innerHTML = "Upgrade Workers (Currently Level " + gameData.upgrade2Level + ") Cost: " + gameData.goldPerClickCost2 + " Gold"
    document.getElementById("perClickUpgrade3").innerHTML = "Upgrade Truck (Currently Level " + gameData.upgrade3Level + ") Cost: " + gameData.goldPerClickCost3 + " Gold"
  }

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
    document.getElementById("mineGoldMenu").style.display = "none"
    document.getElementById("shopMenu").style.display = "none"
    document.getElementById("reincarnate").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
  }
  // go to a tab for the first time, so not all show
  tab("mineGoldMenu")