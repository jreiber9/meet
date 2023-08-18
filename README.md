# meet

## Features

### Feature 1: Filter Events By City

As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

Scenario 1- When user hasn’t searched for a specific city, show upcoming events from all cities.

  Given- user hasn’t searched for any city
  When- the user opens the app
  Then- the user should see a list of upcoming events


Scenario 2- User should see a list of suggestions when they search for a city. 

  Given- the main page is open
  When- user starts typing in the city textbox
  Then- the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario 3- User can select a city from the suggested list.

  Given- user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
  When- the user selects a city (e.g., “Berlin, Germany”) from the list
  Then- their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city


### Feature 2: Show/Hide Event Details

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1- An event element is collapsed by default.

  Given- user searched for events non-specific/specific to a city
  When- the user recieves the list of events
  Then- details of events will be collapsed by default

Scenario 2- User expands event details

  Given- user gets list of events
  When- user selects the events details
  Then- the hidden details will now display for the event

Scenario 3- User wants to collapse event details

  Given- user can the the details of the event displayed
  When- user toggles event selection
  Then- the evenet details will now be hidden
  

### Feature 3: Specify Number of Events

As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

Scenario 1- If a user has chosen a specified number of events to filter, 24 will be default

  Given- user has not chosed a specific number filter
  When- when user is displaying an event page
  Then- user will see only up to 24 events or less by default

Scenario 2- User can adjust the amount of events displayed

  Given- user has default number of events displayed
  When- user selects a different number of events to display
  Then- the app will display that users chosen amount of events


### Feature 4: Use App Offline

As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

Scenario 1- Show stored data when user is disconnected from internet.

  Given- user does not have internet connection
  When- user is viewing the app
  Then- user can view data that has been cached

Scenario 2- User tries to query new data while offline

  Given- user does not have interenet connection
  When- user tries to search for more events that have not been cached
  Then- the app will display an error message


### Feature 5: Add App Shortcut on Home Screen

As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.

Scenario 1- User installs app on home screen

  Given- user wants to create shortcut
  When- user selects option to pin as a shortcut
  Then- the app will be pinned to user's homescreen


### Feature 6: View Chart of Upcoming events in respective City

As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

Scenario 1- User is viewing list of events from choses cities

  Given- user is view list of events from chosen cities/city
  When- user selects option to "display as chart"
  Then- the app will change the view from a list to a chart
