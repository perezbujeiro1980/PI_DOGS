let temperaments=[
    "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "Aloof, Clownish, Dignified, Independent, Happy",
    "Wild, Hardworking, Dutiful",
    "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
    "Loyal, Independent, Intelligent, Brave",
    "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
    "Loving, Protective, Trainable, Dutiful, Responsible",
    "Friendly, Energetic, Loyal, Gentle, Confident",
    "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
    "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
    "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
    "Friendly, Alert, Reserved, Intelligent, Protective",
    "Friendly, Alert, Reserved, Intelligent, Protective",
    "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
    "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
    "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
    "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
    "Steady, Bold, Independent, Confident, Intelligent, Proud",
    "Reliable, Fearless, Energetic, Lively, Self-assured",
    "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
    "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
    "Good-natured, Affectionate, Intelligent, Active, Protective",
    "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
    "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
    "Obedient, Companionable, Intelligent, Joyful",
    "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
    "Affectionate, Lively, Agile, Curious, Happy, Active",
    "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
    "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
    "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
    "Fearless, Friendly, Intelligent, Protective, Calm",
    "Affectionate, Spirited, Intelligent, Good-tempered",
    "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
    "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
    "Affectionate, Loyal, Intelligent, Faithful",
    "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
    "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
    "Stubborn, Affectionate, Gentle, Even Tempered",
    "Friendly, Intelligent, Active",
    "Obedient, Confident, Intelligent, Dominant, Territorial",
    "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
    "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
    "Friendly, Lively, Intelligent",
    "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
    "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
    "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
    "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
    "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
    "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
    "Trainable, Protective, Sweet-Tempered, Keen, Active",
    "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
    "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
    "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
    "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
    "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
    "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
    "Alert, Quick, Dominant, Powerful, Calm, Strong",
    "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
    "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
    "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
    "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
    "Friendly, Alert, Dignified, Intelligent, Calm",
    "Aloof, Loyal, Independent, Quiet",
    "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
    "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
    "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
    "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
    "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
    "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
    "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
    "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
    "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
    "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
    "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
    "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
    "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
    "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
    "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
    "Friendly, Keen, Faithful, Calm, Courageous",
    "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
    "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
    "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
    "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
    "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
    "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
    "Spirited, Agile, Loyal, Gentle, Active, Courageous",
    "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
    "Fearless, Alert, Loyal, Confident, Gay, Eager",
    "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
    "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
    "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
    "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
    "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
    "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
    "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
    "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
    "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
    "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
    "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
    "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
    "Agile, Obedient, Playful, Quick, Sturdy, Bright",
    "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
    "Benevolent, Agile, Alert, Intelligent, Active, Territorial",
    "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
    "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
    "Keen, Loyal, Companionable, Loving, Active, Trainable",
    "Clever, Friendly, Alert, Intelligent",
    "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
    "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
    "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
    "Energetic, Loyal, Intelligent, Trainable",
    "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
    "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
    "Sweet-Tempered, Gentle, Trainable",
    "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
    "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
    "Outgoing, Alert, Patient, Intelligent, Loving",
    "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
    "Friendly, Alert, Confident, Loving, Courageous, Strong",
    "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
    "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
    "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
    "Strong Willed, Suspicious, Gentle, Dominant, Calm",
    "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
    "Bold, Alert, Loyal, Intelligent",
    "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
    null,
    null,
    "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
    "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
    "Lively, Reserved, Intelligent, Active, Protective, Vocal",
    "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
    "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
    "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
    "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
    null,
    "Friendly, Lively, Gentle, Watchful, Calm",
    "Aloof, Reserved, Intelligent, Quiet",
    "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
    "Fearless, Agile, Curious, Independent, Confident, Faithful",
    "Docile, Friendly, Dignified, Gentle",
    "Feisty, Alert, Independent, Playful, Quick, Self-assured",
    "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
    "Charming, Fearless, Keen, Alert, Confident, Faithful",
    "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
    "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
    "Outgoing, Friendly, Alert, Gentle, Intelligent",
    "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
    "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
    "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
    "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
    "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
    "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
    "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
    "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
    "Protective, Loyal, Independent, Intelligent, Loving, Familial",
    "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
    "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
    "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
    "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
    "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
    "Affectionate, Energetic, Loyal, Gentle, Quiet",
    "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
    "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
    "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
    "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
    "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
    "Fearless, Friendly, Bold, Keen, Alert, Quick",
    "Loyal, Gentle, Vigilant, Trainable, Proud",
    "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
    "Bold, Independent, Confident, Intelligent, Courageous",
    null
    ]

let r=["Docile, Agile, Curious"]
let a=["Stubborn, Curious, Playful, Adventurous, Active, Fun-loving","Wild, Hardworking, Dutiful"]
let b=[
    'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
    'Aloof, Clownish, Dignified, Independent, Happy',
    'Wild, Hardworking, Dutiful',
    'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
    'Loyal, Independent, Intelligent, Brave',
    'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous',
    'Loving, Protective, Trainable, Dutiful, Responsible',
    'Friendly, Energetic, Loyal, Gentle, Confident']

let c= [
    'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
    'Aloof, Clownish, Dignified, Independent, Happy',
    'Wild, Hardworking, Dutiful',
    'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
    'Loyal, Independent, Intelligent, Brave',
    'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous',
    'Loving, Protective, Trainable, Dutiful, Responsible',
    'Friendly, Energetic, Loyal, Gentle, Confident',
    'Friendly, Affectionate, Devoted, Loyal, Dignified, Playful',
    'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant',
    'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
    'Friendly, Alert, Reserved, Intelligent, Protective',
    'Friendly, Alert, Reserved, Intelligent, Protective',
    'Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving',
    'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
    'Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous',
    'Friendly, Energetic, Obedient, Intelligent, Protective, Trainable',
    'Steady, Bold, Independent, Confident, Intelligent, Proud',
    'Reliable, Fearless, Energetic, Lively, Self-assured',
    'Cautious, Energetic, Loyal, Obedient, Protective, Brave',
    'Friendly, Energetic, Alert, Loyal, Intelligent, Eager',
    'Good-natured, Affectionate, Intelligent, Active, Protective',
    'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous',
    'Aloof, Affectionate, Attentive, Rugged, Fierce, Refined',
    'Obedient, Companionable, Intelligent, Joyful',
    'Affectionate, Energetic, Alert, Curious, Playful, Intelligent',
    'Affectionate, Lively, Agile, Curious, Happy, Active',
    'Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle',
    'Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent',
    'Self-confidence, Hardy, Lively, Alert, Intelligent, Active',
    'Fearless, Friendly, Intelligent, Protective, Calm',
    'Affectionate, Spirited, Intelligent, Good-tempered',
    'Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective',
    'Energetic, Alert, Loyal, Intelligent, Attentive, Protective',
    'Affectionate, Loyal, Intelligent, Faithful',
    'Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive',
    'Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable',
    'Stubborn, Affectionate, Gentle, Even Tempered',
    'Friendly, Intelligent, Active',
    'Obedient, Confident, Intelligent, Dominant, Territorial',
    'Tenacious, Keen, Energetic, Responsive, Alert, Intelligent',
    'Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered',
    'Friendly, Lively, Intelligent',
    'Protective, Loyal, Gentle, Intelligent, Familial, Rational',
    'Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm',
    'Friendly, Energetic, Companionable, Intelligent, Eager, Trainable',
    'Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable',
    'Fearless, Loyal, Obedient, Intelligent, Faithful, Protective',
    'Agile, Adaptable, Quick, Intelligent, Attentive, Happy',
    'Trainable, Protective, Sweet-Tempered, Keen, Active',
    'Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial',
    'Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous',
    'Hardy, Fearless, Assertive, Gay, Intelligent, Active',
    'Trainable, Reserved, Stable, Quiet, Even Tempered, Calm',
    'Affectionate, Devoted, Alert, Companionable, Intelligent, Active',
    'Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving',
    'Alert, Quick, Dominant, Powerful, Calm, Strong',
    'Fearless, Affectionate, Sociable, Patient, Playful, Adaptable',
    'Affectionate, Intelligent, Quiet, Dominant, Happy, Protective',
    'Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy',
    'Suspicious, Affectionate, Devoted, Reserved, Independent, Loving',
    'Friendly, Alert, Dignified, Intelligent, Calm',
    'Aloof, Loyal, Independent, Quiet',
    'Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted',
    'Trainable, Friendly, Affectionate, Playful, Quiet, Faithful',
    'Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry',
    'Affectionate, Lively, Playful, Intelligent, Trainable, Vocal',
    'Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active',
    'Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent',
    'Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective',
    'Reliable, Affectionate, Alert, Loyal, Obedient, Trainable',
    'Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented',
    'Kind, Energetic, Independent, Adaptable, Intelligent, Bossy',
    'Affectionate, Cheerful, Alert, Intelligent, Attentive, Active',
    'Affectionate, Reserved, Playful, Gentle, Happy, Loving',
    'Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable',
    'Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm',
    'Docile, Cautious, Sociable, Sensitive, Adaptable, Familial',
    'Friendly, Keen, Faithful, Calm, Courageous',
    'Playful, Loyal, Independent, Intelligent, Happy, Vocal',
    'Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright',
    'Spirited, Lively, Intelligent, Loving, Even Tempered, Familial',
    'Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous',
    'Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable',
    'Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful',
    'Spirited, Agile, Loyal, Gentle, Active, Courageous',
    'Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident',
    'Fearless, Alert, Loyal, Confident, Gay, Eager',
    'Friendly, Devoted, Reserved, Gentle, Confident, Loving',
    'Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident',
    'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered',
    'Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful',
    'Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active',
    'Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent',
    'Affectionate, Energetic, Lively, Independent, Playful, Companionable',
    'Respectful, Lively, Intelligent, Dominant, Protective, Trainable',
    'Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous',
    'Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent',
    'Alert, Loyal, Independent, Intelligent, Loving, Cat-like']
 
function filterTemperaments(temperaments){

const filteredTemperaments=[]
const arr = temperaments.filter(element=> element!==null)

 arr.forEach((element)=>{    
    element.split(',').map((element)=>{        
      element = element.trim()        
      if (!filteredTemperaments.includes(element))
        filteredTemperaments.push(element)
    })    
})  
 
filteredTemperaments.sort((a,b)=>{
  if (a<b) return -1
  if (a>b) return 1
  else return 0
})

return filteredTemperaments
}


console.log(filterTemperaments(c))
 
 