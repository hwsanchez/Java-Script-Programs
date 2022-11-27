/*
**Example Output**
```
This is the time you spent on social media in the last 5 days:
[40, 30, 20, 45, 15]

The average time is: 35 minutes.

The maximum time spent in a day is: 45 minutes.

The minimum time spent in a day is: 15 minutes.

The total time spent in the last 5 days is: 150 minutes.
*/


var socialMediaTime = [25, 60, 40, 12, 87, 78, 10,]; //minutes per day on Social Media
var averageTime,maximumTime,minimumTime,totalTime = 0;
  
maximumTime = socialMediaTime[0];
minimumTime = socialMediaTime[0];

for (i = 0; i < socialMediaTime.length; i++) {

  totalTime += socialMediaTime[i];

  if (maximumTime < socialMediaTime[i])
    maximumTime = socialMediaTime[i];
  
  if (minimumTime > socialMediaTime[i])
    minimumTime = socialMediaTime[i];
  
  
}

averageTime = Math.round(totalTime / socialMediaTime.length);

console.log(`Array.length = ${socialMediaTime.length}`);

console.log(`
This is the time you spent on Social Media in the last 7 days:
${socialMediaTime}

The average time is ${averageTime} minutes.

The maximum time spent in a day is: ${maximumTime}

The minimum time spent in a day is: ${minimumTime} minutes.

The total time spent in the last 7 days is: ${totalTime} minutes.
`);