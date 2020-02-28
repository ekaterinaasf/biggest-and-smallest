# Up/Down Code-Along

A simple little website where users can select a number by increasing and decreasing a value and then calculate, via 'save' button, which value among this one and previously selected ones is the biggest and the smallest one. There is always a chance to start the game from the beginning nullifying all saved numbers via the 'reset' button.

## DOM

| tag name    | attributes                             | role                                                                   |
| ----------- | -------------------------------------- | ---------------------------------------------------------------------- |
| `<section>` | `id="user-interface" class="centered"` | the section that contains all user interface elements                  |
| `<input>`   | `id='input' type='number'`             | the value for user to input                                            |
| `<button>`  | `id='save-button'`                     | button to save current state and calculate biggest and smallest values |
| `<code>`    | `id='biggest'`                         | the current biggest number                                             |
| `<code>`    | `id="smallest"`                        | the current smallest number                                            |
| `<button>`  | `id="reset"`                           | button to reset the current value                                      |

## Styling

| class name  | description                    | role                                     |
| ----------- | ------------------------------ | ---------------------------------------- |
| `.centered` | sets position for all elements | make block of buttons more user-friendly |
| `.input`    | sets input value style         | make input value more visible            |

## Listeners

| type      | attached to         | callback            |
| --------- | ------------------- | ------------------- |
| `'click'` | `id='save-button''` | `saveNumberHandler` |
| `'click'` | `id='reset'`        | `resetHandler`      |

## Handlers

| syntax                | parameters | return value                                    | behavior                                                                                                                                             |
| --------------------- | ---------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `saveNumberHandler()` | no         | Boolean: should the browser continue as normal? | reads user input save, calculate min and max, then provide the result to the user, logs old state and alerts the browser 'OK'                        |
| `resetHandler()`      | no         | Boolean: should the browser continue as normal? | reset the user input and current saved numbers to the default state, then provide the result to the user, logs old state and alerts the browser 'OK' |
