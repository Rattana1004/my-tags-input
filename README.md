# React Tags Input Component

## Overview
A flexible and user-friendly React component for managing multiple tags with built-in features like:
- Adding tags by pressing Enter
- Preventing duplicate tags
- Limiting maximum number of tags
- Easy tag removal

## Features
- Add multiple tags with comma separation
- Prevent duplicate tag entry
- Set a maximum tag limit
- Dynamic placeholder based on current tag count
- Duplicate tag warning

## Installation
```bash
npm install react
```

## Usage
```jsx
import TagsInput from './TagsInput';

function App() {
  return (
    <div>
      <h1>Tag Input Example</h1>
      <TagsInput maxTags={5} />
    </div>
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxTags` | `number` | `7` | Maximum number of tags allowed |

## Behavior
- Press Enter to add tags
- Comma-separated tags can be added at once
- Duplicate tags are prevented and shown in a warning
- Input is disabled when maximum tags are reached
- Click '×' to remove individual tags

## Example Scenarios
```jsx
// Default usage (max 7 tags)
<TagsInput />

// Custom tag limit
<TagsInput maxTags={3} />
```

## Input Methods
- Type and press Enter
- Type multiple tags separated by commas
- Blurring the input adds tags

## Duplicate Handling
- Duplicates are not added
- A temporary warning shows which tags were not added

## Styling
Customize the component using these CSS classes:
- `.tags-input-container`
- `.tag-item`
- `.text`
- `.close`
- `.dup-warning`

## Limitations
- Maximum of 7 tags by default
- Commas are used as tag separators

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.