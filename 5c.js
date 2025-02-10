function JsonParse(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    console.log("parsed data:", parsedData);
  } catch (error) {
    console.log("error parsing JSON:", error.message);
  }
}

JsonParse('{"name":"Aditya","rollno":2310997013}');
JsonParse("invalid JSON string");
