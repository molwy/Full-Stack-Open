Exercise 0.6: New note in Single page app diagram

```mermaid

sequenceDiagram
    actor u as user
    participant b as browser
    participant s as server

Note left of b: Page loaded
    u-->>b: The user enters something into the text box and clicks "save" button
Note left of b: New note added to array. 
Note left of b: Js rerenders the note list on the page
    b->>s: POST entry/date to https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate s
    s-->>b: The server responds with status code 201 created. No redirect requested.
    Note left of b: The browser stays on the same page, and it sends no further HTTP requests.

```