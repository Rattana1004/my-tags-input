import { useState } from "react";


function TagsInput({ maxTags = 7 }){
    const [tags, setTags] = useState([])
    const [duplicates, setDuplicates] = useState([])
    
    
    function handleKeyDown(e, isBlur = false){

        if (tags.length >= maxTags){
            e.target.value = '';
            return;
        }
    
        if(!isBlur && e.key !== 'Enter') return

        const value = e.target.value

        if(!value.trim()) return

        const commaTags = value.split(',').map(tag => tag.trim()).filter(tag => tag);

        const newTags = commaTags.reduce((acc ,tag) => {
            if(!tags.includes(tag) && !acc.includes(tag)){
                acc.push(tag);
            }
            return acc;
        }, []);

        const dupTags = commaTags.filter(tag =>
            tags.includes(tag) || newTags.indexOf(tag) === -1
        )

        if (dupTags.length > 0) {
            setDuplicates(dupTags);
            setTimeout(() => setDuplicates([]), 3000);
        }

        setTags(itemTags => {
            const allTags = [...itemTags, ...newTags];
            return allTags;
          });
        e.target.value = ''
    }
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
        
            {tags.map((tag, index) => (
                 <div className="tag-item" key={index}>
        
                 <span className="text">{tag}</span>
                 <span className="close" onClick={() => removeTag(index)}>&times;</span>
             </div>
            ))
            }
            <input onKeyDown={handleKeyDown}
             type="text"
             onBlur={(e) => handleKeyDown(e,true)}
              className="tags-input" placeholder={tags.length < maxTags ? `Type somthing (max ${maxTags} tags)` : 'Maximum tags'}
              disabled={tags.length >= maxTags}></input>
        
           
        {duplicates.length> 0 && (
                <div className="dup-warning">
                    Duplicate tags not added: {duplicates.join(', ')}
                </div>
            )}
        </div>
    
        
    )
}

export default TagsInput;