
#  __/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\________/\\\\\\\\\_______/\\\\\______        
#   _\/\\\///////////__\/\\\///////////______/\\\////////______/\\\///\\\____       
#    _\/\\\_____________\/\\\_______________/\\\/_____________/\\\/__\///\\\__      
#     _\/\\\\\\\\\\\_____\/\\\\\\\\\\\______/\\\______________/\\\______\//\\\_     
#      _\/\\\///////______\/\\\///////______\/\\\_____________\/\\\_______\/\\\_    
#       _\/\\\_____________\/\\\_____________\//\\\____________\//\\\______/\\\__   
#        _\/\\\_____________\/\\\______________\///\\\___________\///\\\__/\\\____  
#         _\/\\\_____________\/\\\\\\\\\\\\\\\____\////\\\\\\\\\____\///\\\\\/_____ 
#          _\///______________\///////////////________\/////////_______\/////_______

# curso-basico-graphql
Curso básico de graphql 

Este repo tiene todas mis notas del curso basico de GraphQL de Platzi.

Alias
{
  AllCourses: getCourses {
    _id
    title
}

Course1: getCourse(id: "5d8ae5ebcf58f1ab73058dc8"){
  _id
  title
  description
}

Course2: getCourse(id: "5dab4133e40ae202a8ba2267"){
  title
  description
  topic
}
}  

Fragmentos
{
  AllCourses: getCourses {
  ...CourseFields
}

Course1: getCourse(id: "5d8ae5ebcf58f1ab73058dc8"){
 ...CourseFields
  teacher
}

Course2: getCourse(id: "5dab4133e40ae202a8ba2267"){
 ...CourseFields
  topic
}
  
} 

fragment CourseFields on Course {
  _id
  title
  description
  people{
    _id 
    name
  }
}
