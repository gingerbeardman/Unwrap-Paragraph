**Unwrap Paragraph** adds the ability to merge multiple lines of selected text into one.

This is useful for combining multiple lines of data into one, or reflowing a paragraph of text that has had manual line breaks applied such as something pasted from an old email. It also coalesces areas of white space into a single space. So, it's not just "Join Lines" but something more specific.

In the _TextMate_ editor this command is called Unwrap Paragraph, which is why I've kept the same name.

## Example

Before:
```
	What 
exactly does  
this   extension	
do with the
text?  🤔
```

After:
```
What exactly does this extension do with the text? 🤔
```

Source code, before:
```lua
{
	0x050,
	0x104,
	0x202,
	0x050,
	0x451,
	0x104,
	0x505,
	0x088,
	0x272,
	0x104,
	0x050
}
```

Source code, after:
```lua
{ 0x050, 0x104, 0x202, 0x050, 0x451, 0x104, 0x505, 0x088, 0x272, 0x104, 0x050 }
```

## Usage

To run Unwrap Paragraph:

- Select the **Editor → Unwrap Paragraph** menu item; or
- Open the command palette and type `Unwrap Paragraph`
