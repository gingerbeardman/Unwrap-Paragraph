exports.activate = function() {
    nova.commands.register("com.gingerbeardman.reformat", flowLines);
}

function flowLines(editor) {
    const selectedRanges = editor.selectedRanges;
    
    editor.edit(function(e) {
        for (let range of selectedRanges.reverse()) {
            let text = editor.getTextInRange(range);
            let newText = text.replace(/\n/g, ' ').trim();
            e.replace(range, newText);
        }
    });
}