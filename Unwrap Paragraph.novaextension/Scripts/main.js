exports.activate = function() {
    nova.commands.register("com.gingerbeardman.unwraptext", flowLines);
}

function flowLines(editor) {
    editor.edit(function(e) {
        for (let range of editor.selectedRanges.reverse()) {
            let text = editor.getTextInRange(range);
            let newText = text.replace(/\s+/g, ' ').trim();
            e.replace(range, newText);
        }
    });
}