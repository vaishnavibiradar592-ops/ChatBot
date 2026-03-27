const API_KEY='AIzaSyDunk3PY75ZSRSAbHc0Cx-seht2XTQa_i0'
const API_URL='https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent'
const chatMessages=document.getElementById('chat-box')
const userinput=document.getElementById('chat-input')
const sendbutton=document.getElementById('send-button')

async function generateResponse(prompt){
    const response = await fetch (`${API_URL}?keys=${API_KEY}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            contents:[
                {
                    parts:[
                        {
                            text:prompt
                        }
                    ]
                }
            ]
        })
    })
    if(!response.ok){
    throw new Error('Failed to give response')
}
const data = await response.json()
return data.candidates[0].content.parts[0].text;
}


