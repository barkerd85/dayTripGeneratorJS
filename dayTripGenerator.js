


var activities_in_Chicago, activities_in_Cincinnati, activities_in_Dallas, activities_list, activities_list2, cities, question, question2, restaraunts_in_Chicago, restaraunts_in_Cincinnati, restaraunts_in_Dallas, transportation_in_Chicago, transportation_in_Cincinnati, transportation_in_Dallas;
cities = ["Cincinnati", "Chicago", "Dallas"];
restaraunts_in_Cincinnati = ["Skyline Chili", "Frishces", "Larosas"];
restaraunts_in_Dallas = ["Zalats", "Halal Guys", "Gen Korean"];
restaraunts_in_Chicago = ["Portillos", "Lou Malnatis", "Hot Dog Station"];
transportation_in_Cincinnati = ["Cincy Metro Bus", "Uber", "Zipcars"];
transportation_in_Dallas = ["DART", "M-Line Trolley", "Bird electric scooters"];
transportation_in_Chicago = ["Water Taxis", "CTA", "Divvy Bikes"];
activities_in_Cincinnati = ["Kings Island theme park", "Ohio Renaissance Festival", "Cincinnati History Musuem"];
activities_in_Dallas = ["Dallas Art Musuem", "Cowgirls game", "JFK tour"];
activities_in_Chicago = ["Chicago Bulls game", "Chicago Crime and Mob tour", "Downtown boat tour"];

function set_city() {
  let random = Math.floor(Math.random() * cities.length);
  console.log(cities[random]);
  return cities[random]
}

function set_transportation_cincy() {
  let random = Math.floor(Math.random() * transportation_in_Cincinnati.length);
  console.log(transportation_in_Cincinnati[random]);
  return transportation_in_Cincinnati[random]
}
  

function set_activity_cincy() {
  let random = Math.floor(Math.random() * activities_in_Cincinnati.length);
  console.log(activities_in_Cincinnati[random]);
  return activities_in_Cincinnati[random]
}


function set_food_cincy() {
  let random = Math.floor(Math.random() * restaraunts_in_Cincinnati.length);
  console.log(restaraunts_in_Cincinnati[random]);
  return restaraunts_in_Cincinnati[random]
}

function set_transportation_dallas() {
  let random = Math.floor(Math.random() * transportation_in_Dallas.length);
  console.log(transportation_in_Dallas[random]);
  return transportation_in_Dallas[random]
}

function set_activity_dallas() {
  let random = Math.floor(Math.random() * activities_in_Dallas.length);
  console.log(activities_in_Dallas[random]);
  return activities_in_Dallas[random]
}

function set_food_dallas() {
  let random = Math.floor(Math.random() * restaraunts_in_Dallas.length);
  console.log(restaraunts_in_Dallas[random]);
  return restaraunts_in_Dallas[random]
}

function set_transportation_chicago() {
  let random = Math.floor(Math.random() * transportation_in_Chicago.length);
  console.log(transportation_in_Chicago[random]);
  return transportation_in_Chicago[random]
}

function set_activity_chicago() {
  let random = Math.floor(Math.random() * activities_in_Chicago.length);
  console.log(activities_in_Chicago[random]);
  return activities_in_Chicago[random]
}

function set_food_chicago() {
  let random = Math.floor(Math.random() * restaraunts_in_Chicago.length);
  console.log(restaraunts_in_Chicago[random]);
  return restaraunts_in_Chicago[random]
}
  

function random_city() {
  var activity, food, randcity, transportation;
  randcity = set_city();

  if (randcity === "Cincinnati") {
    transportation = set_transportation_cincy();
    activity = set_activity_cincy();
    food = set_food_cincy();
  }

  if (randcity === "Dallas") {
    transportation = set_transportation_dallas();
    activity = set_activity_dallas();
    food = set_food_dallas();
  }

  if (randcity === "Chicago") {
    transportation = set_transportation_chicago();
    activity = set_activity_chicago();
    food = set_food_chicago();
  }

  return [randcity, transportation, activity, food];
}

activities_list = random_city();
console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
question = prompt("Are you happy with your day trip selections?");

while (question !== "yes" && question !== "no") {
  question = prompt("Please answer yes or no.");
}

while (question !== "yes") {
  if (question !== "no") {
    question = prompt("Please answer yes or no.");
  } else {
    question2 = prompt("What would you like to change?");

    if (question2 === "city") {
      activities_list2 = random_city();

      while (activities_list[0] === activities_list2[0]) {
        activities_list2 = random_city();
      }

      activities_list = activities_list2;
      console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
      question = prompt("Are you happy with your day trip selections?");
    } else {
      if (question2 === "transportation") {
        if (activities_list[0] === "Chicago") {
          activities_list[1] = set_transportation_chicago();
        }

        if (activities_list[0] === "Dallas") {
          activities_list[1] = set_transportation_dallas();
        }

        if (activities_list[0] === "Cincinnati") {
          activities_list[1] = set_transportation_cincy();
        }

        console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
        question = prompt("Are you happy with your day trip selections?");
      } else {
        if (question2 === "food") {
          if (activities_list[0] === "Chicago") {
            activities_list[3] = set_food_chicago();
          }

          if (activities_list[0] === "Dallas") {
            activities_list[3] = set_food_dallas();
          }

          if (activities_list[0] === "Cincinnati") {
            activities_list[3] = set_food_cincy();
          }

          console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
          question = prompt("Are you happy with your day trip selections?");
        } else {
          if (question2 === "activity") {
            if (activities_list[0] === "Chicago") {
              activities_list[2] = set_activity_chicago();
            }

            if (activities_list[0] === "Dallas") {
              activities_list[2] = set_activity_dallas();
            }

            if (activities_list[0] === "Cincinnati") {
              activities_list[2] = set_activity_cincy();
            }

            console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
            question = prompt("Are you happy with your day trip selections?");
          } else {
            console.log("Please pick city, transportation, food, or activity.");
          }
        }
      }
    }
  }
}

console.log(`Your day trip is planned to ${activities_list[0]} where you will be riding in style with ${activities_list[1]}, and having dinner at ${activities_list[3]}. Then you will be enjoying the ${activities_list[2]}. `);
console.log("enjoy yourself");
