/**
 * Update input fields so that the label is not covering the input text when updating fields from the model
 */
function updateInputFields() {
    if (Materialize && Materialize.updateTextFields) {
        Materialize.updateTextFields()
    }
}