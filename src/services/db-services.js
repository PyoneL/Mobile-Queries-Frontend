const ApiUrl = "https://yazlab22.somee.com";
const Adresses = {
  TypeOne: {
    One: "/api/exampleonequeries/queryone",
    Two: "/api/exampleonequeries/querytwo",
    Three: "/api/exampleonequeries/querythree",
  },
  TypeTwo: {
    One: "/api/exampletwoqueries/queryone",
    Two: "/api/exampletwoqueries/querytwo",
    Three: "/api/exampletwoqueries/querythree",
  },
  TypeThree: {
    One: "/api/examplethreequeries/queryone",
    Two: "/api/examplethreequeries/querytwo",
    Three: "/api/examplethreequeries/querythree",
  },
  Location: {
    GetAll: "/api/location/all",
  },
};
const GOOGLE_MAPS_APIKEY = "AIzaSyCOA7g0o-KcAnxg7C_d74h8quV_Ffsc4Ng";

const GetData = async (data, adress) => {
  return fetch(ApiUrl + adress, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    })
    .catch((error) => console.error(error));
};

function ParseDate(date, withTime = false) {
  var day = "0" + date.getDate();
  var mount = "0" + (date.getMonth() + 1);
  var year = date.getFullYear();
  var hour = "0" + date.getHours();
  var min = "0" + date.getMinutes();
  var sec = "0" + date.getSeconds();
  if (withTime)
    return (
      hour.substr(-2) +
      ":" +
      min.substr(-2) +
      ":" +
      sec.substr(-2) +
      "  " +
      day.substr(-2) +
      "-" +
      mount.substr(-2) +
      "-" +
      year
    );
  return day.substr(-2) + "-" + mount.substr(-2) + "-" + year;
}
export { Adresses, GetData, GOOGLE_MAPS_APIKEY, ParseDate };
