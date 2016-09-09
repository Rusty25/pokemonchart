var selectedColor = 'none';
var cheats = 'off';
var shortColors = {'green': '#248f24', 'gray': '#1a1a1a', 'red': 'maroon'};
//all the Pokemon types, plus an empty
var types = ["empty", "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"]
var typeGreen = ['fire_grass', 'fire_ice', 'fire_bug', 'fire_steel', 'water_fire', 'water_ground', 'electric_water', 'electric_flying', 'grass_water', 'grass_ground', 'grass_rock', 'ice_grass', 'ice_ground', 'ice_flying', 'ice_dragon', 'fighting_normal', 'fighting_ice', 'fighting_rock', 'fighting_dark', 'fighting_steel', 'poison_grass', 'poison_fairy', 'ground_fire', 'ground_electric', 'ground_poison', 'ground_rock', 'ground_steel', 'flying_grass', 'flying_fighting', 'flying_bug', 'psychic_fighting', 'psychic_poison', 'bug_grass', 'bug_psychic', 'bug_dark', 'rock_fire', 'rock_ice', 'rock_flying', 'rock_bug', 'ghost_psychic', 'ghost_ghost', 'dark_psychic', 'dark_ghost', 'steel_ice', 'steel_rock', 'steel_fairy', 'fairy_poison', 'fairy_dragon', 'fairy_dark']
var typeRed = ['normal_rock', 'normal_steel', 'fire_fire', 'fire_water', 'fire_rock', 'fire_dragon', 'water_water', 'water_grass', 'water_dragon', 'electric_electric', 'electric_grass', 'electric_dragon', 'grass_fire', 'grass_grass', 'grass_poison', 'grass_flying', 'grass_bug', 'grass_dragon', 'grass_steel', 'ice_fire', 'ice_water', 'ice_ice', 'ice_steel', 'fighting_poison', 'fighting_flying', 'fighting_psychic', 'fighting_bug', 'fighting_fairy', 'poison_poison', 'poison_ground', 'poison_rock', 'poison_ghost', 'ground_grass', 'ground_bug', 'flying_grass', 'flying_rock', 'flying_steel', 'psychic_psychic', 'psychic_steel', 'bug_fire', 'bug_fighting', 'bug_poison', 'bug_flying', 'bug_ghost', 'bug_steel', 'bug_fairy', 'rock_fighting', 'rock_ground', 'rock_steel', 'ghost_dark', 'dragon_steel', 'dark_fighting', 'dark_dark', 'dark_fairy', 'steel_fire', 'steel_water', 'steel_electric', 'steel_steel', 'fairy_fire', 'fairy_poison', 'fairy_steel']
var typeGray = ['normal_ghost', 'electric_ground', 'fighting_ghost', 'poison_steel', 'ground_flying', 'psychic_dark', 'ghost_normal', 'dragon_fairy']
//gives colors to each class
var colors = ['white', '#999966', '#e67300', '#3366ff', '#ffbf00', '#248f24', '#00e6e6', 'maroon', '#730099', '#cc9900', '#b366ff', '#ff3399', '#86b300', '#997300', '#400080', '#6600cc', '#331a00', '#b3b3b3', '#ff66ff']
$('body').append('<div id="cheats">off</div>Cheats<div id="selectGray" class="selector"> 0 </div>No effect (0%)<div id="selectRed" class="selector"> ½ </div>Not very effective (50%)<div id="selectGreen" class="selector"> 2 </div>Super-effective (200%)')
//for loop that creates the chart
for (var attack = 0; attack <= 18; attack++){
 $('body').append('<tr>') 
 // the ones in a vertical column
    $('body').append('<th class=' + types[attack] + '>' + types[attack] + '</th>')
  for (var defend = 1; defend <= 18; defend++) {
    if (attack == 0) {
      // the ones in a horizontal row
      $('body').append('<th class=' + types[defend] + ' id=' + types[defend] + '>' + types[defend].slice(0,3) + '</th>')
    }
    else {
      var type = String(types[attack] + '_' + types[defend]);
        if(typeGreen.indexOf(type) >= 0) {
          $('body').append('<td id="' + type + '" class="shouldBeGreen invisible">2</td>')
        }
        else if (typeRed.indexOf(type) >= 0) {
          $('body').append('<td id="' + type + '" class="shouldBeRed invisible">½</td>')
        }
        else if (typeGray.indexOf(type) >= 0) {
          $($('body').append('<td id="' + type + '" class="shouldBeGray invisible">0</td>'))
        }
        else {
          $('body').append('<td class="shouldBeWhite invisible"></td>') 
          }
    }
  $('body').append('</tr>')}
  $('.' + types[attack]).css('background-color', colors[attack])
}
//fixes empty
$('.empty').empty();
$('.empty').append('<p>defense→<br>attack↴</p>')
//adds colored borders to each <th>

for (var x = 0; x <= 18; x++) {
  var color = $('.' + types[x]).css('background-color')
  $('.' + types[x]).css({'border': '1px solid ' + color, 'text-shadow': '1px 1px ' + color})
}
//click on a selector
$('.selector').click(function() {
  $('#cheats').css({'border': '4px double white', 'background-color': '#f2f2f2'})
  turnCheatsOff()
  var text = $(this).attr('id').slice(6).toLowerCase();
  if (selectedColor != text) {
    selectedColor = text;
    $('.selector').css('border', '4px solid white')
    $(this).css('border', '4px double white')
  }
  else if (selectedColor == text) {
    selectedColor = 'none';
    $(this).css('border', '4px solid white')
  }
})
//turning cheats on and off
var turnCheatsOff = function(){
  cheats = 'off'
  $('#cheats').css('border', '4px double white')
  $('.invisible').css('color', 'yellow')
  $('.invisible').css({'background-color': 'white', 'color': 'white'})
  $('#cheats').empty()
  $('#cheats').append(cheats)
}
var turnCheatsOn = function(){
  cheats = 'on'
  $('#cheats').empty()
  $('#cheats').append(cheats)
 $('.selector').css('border', '4px solid white')
 $('.invisible').css('color', 'yellow')
 $('.shouldBeGreen.invisible').css('background-color', '#248f24')
 $('.shouldBeRed.invisible').css('background-color', 'maroon')
 $('.shouldBeGray.invisible').css('background-color', '#1a1a1a')
 $('#cheats').css({'border': '4px double black'})
}
$('#cheats').click(function(){
  if (cheats == 'off') {
    turnCheatsOn()
  }
  else {
    turnCheatsOff()
  }
})
$('td').click(function() {
  if (selectedColor != "none") {
  if ($(this).hasClass('invisible')) {
   var shouldBeThis = $(this).attr('class').split(" ")[0].slice(8).toLowerCase()
if(selectedColor == shouldBeThis) {
  //colors are right
  $(this).fadeOut(0, function() {
    //fade in and out
    $(this).css({'background-color': shortColors[shouldBeThis], 'color': 'yellow'})
    //while everything is invisible
    $(this).fadeIn(1000)
    $(this).removeClass('invisible')
  })
}
    else {
      //colors are wrong 
      fails = fails + 1
$(this).css({'background-color': 'red', 'color': 'red', 'opacity': '1'})
$(this).fadeOut(1000, function() {
  $(this).css({'background-color': 'white', 'color': 'white'})
  $(this).fadeIn(500)
})}}}})
$('body').append(specialIds)