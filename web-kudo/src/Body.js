
import styled from "styled-components";

function Body(){
   return(
       <BodyColor>
           this is the body
       </BodyColor>
   )

}
export default Body;

const BodyColor = styled.div`
  background-color: purple;
`;