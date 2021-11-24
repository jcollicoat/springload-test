# Springload Test
My submission for the [Spring Form Validation Problem](https://github.com/springload/form-validation-problem/). Relevant code is in the App.js file.

## Tools used
* CRA to get the project up and running
* Styled components for quick and easy styling

## Input Components
Inputs are controlled by the data object – keeping input state in sync with the data.

### Email Address
* Uses the pattern attribute to validate email address format
* Stored as a string in data

### Password
* Uses the pattern attribute to validate 8+ character length
* Stored as a string in data

### Colour
* Radio button selector for single choice
* Stored as a string in data

### Animals
* Checkbox selectors for multi choice
* Stored as an array of strings in data
* Checking/unchecking adds/removes each animal from the animals array in the data

### Type of Tiger
* Only appears if Tiger is checked above
* Uses html required attribute for validation
* Stored as a string in data

### Submit
* Button copy changes during form submission to indicate progress
* Success message appears once form is submitted

## Considerations
* Accessibility: form can be completed with keyboard only
* Browser support: Tested on major browsers (Chrome, Firefox, Edge, Safari)
* Documentation: Basic comments have been left in the code indicating what each section does

## What I would continue doing...
I focussed on getting the data and validation right in the time alloted. While the interface is functional (and as responsive, if not exciting, as a single-column layout) it could be improved with more time:
* Focus indicator on submit button could be a bit better (for accessibility)
* Could add additional `fieldset` wrappers to groups of inputs. Would be especially important for a longer form
* Components could be split out into individual files – to be more re-usable and make it easier to explore the code
* With re-usable components, inputs could be mapped to dynamic data sets (e.g. if an editor chose form fields in a CMS)
* The password field could have more requirements than just 8+ characters (e.g. capitals, numbers, symbols, no spaces etc)
* Colours inputs could use their respective colours to make selection more intuitive. Not such an issue with 5 options but with a larger data set it could be helpful!
* Images could be included for animals
* Custom styling could be applied to radio/checkbox inputs, so they a. look nicer and b. are consited across browsers/devices
* An animation or transition could be implemented for revealing the Type of Tiger field, and success message
* Instructions and error messages could be expanded – e.g. a custom message prompting a user to enter a valid email address rather than the browser default, to ensure a consistent experience across devices
* Automated testing could be implemented for inputs (would be more valuable the larger the form got and with re-usable components)
* Form submission data could be piped off somewhere when a user submits the form!
