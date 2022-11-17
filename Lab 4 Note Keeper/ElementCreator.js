export default class ElementCreator{
    
    static createNoteCard = (note)=>{

        let colorNums = Array.from(note.color.slice(1,note.color.length))
        let colorNumsSum = colorNums.map(x=>parseInt(x,16)).reduce((partialSum, a) => partialSum + a, 0);
        let fontColor = colorNumsSum <45 ? "white" : "black"



        const title = this.createCustomElement("p",{
            className:"title",
            innerHTML:note.title
            
        })  
        
        const content = this.createCustomElement("p",{
            className:"content",
            innerHTML:note.content
        })

        const creationDate = this.createCustomElement("p",{
            className:"date",
            innerHTML:new Date(note.date).toLocaleDateString()
        })

        const dueDate = this.createCustomElement("p",{
            className:"date",
            innerHTML:new Date(note.dueDate).toLocaleDateString()
       

        })

        const tags = this.createCustomElement("p",{
            className:"tags",
            innerHTML:note.tags.toString(),
      

        })


        const card = this.createCustomElement("div",{
            className:"noteCard",
            style:
            `background-color:${note.color};
            color:${fontColor}            
            ` ,
            children:[title,content,dueDate]      
            
        })
        
        card.append(title)
        card.append(content)
        card.append(dueDate)
        card.append(creationDate)
        card.append(tags)
        
        return card


    }

    static createCustomElement = (element,props)=>{
        if(typeof(element) === "string")  element = document.createElement(element)        

        for(const [key,value] of Object.entries(props)){
            if(value instanceof Array){
                if(key == "children"){
                    value.forEach((prop)=>{
                        element.append(prop)
                    })
                }               
                return element
            }            
            element[key] = value;          
            
        }      
        return element      
    }   
    


    

}
