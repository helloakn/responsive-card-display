import styled from 'styled-components';
import Tag from '@/components/tags/tags-component'
import { ICard, TTag } from '@/types'
// --------------  Elements
type TbackgroundImage = {
    backgroundImage: string
}
const Container = styled.div`
  min-height:300px;
  padding:10px;
  padding-left:20px;
  padding-right:20px;
  border-radius:5px;
  cursor: pointer;
  color:white;
  font-size:12px;

  box-shadow: -1px 7px 24px -4px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 7px 24px -4px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 7px 24px -4px rgba(0,0,0,0.75);
`;
const InnerContainer = styled.div`
  width:100%;
  height:100%;

  
`;
const ImageContainer = styled.div<TbackgroundImage>`
  width:100%;
  height:60%;

  display:flex;
  flex-direction:row;
  align-items:flex-end;
  justify-content:center;

  background-image: ${props => props.backgroundImage};
  background-repeat: no-repeat;
  background-position:center;
  background-size: auto 85%;
  
`;
const ItemNameContainer = styled.div`
  background-color:#000;

  width:55%;
  text-align:center;
  padding:10px;
  
//   position:absolute;
`;
const DescriptionContainer = styled.div`
padding-top:10px;
  width:100%;
  height:20%;

  text-align:center;
  color:#000;
  
`;
const TagsContainer = styled.div`
  
  width:100%;
  height:15%;

  display:flex;
  flex-direction:row;

`;

// --------------  Functions

import bg from '@/assets/images.jpeg'

export default function Card({ ...props }: ICard) {
    const { name, body, tags } = props

    const elementTags = tags.map(element => {
        return <Tag text={element.name} />
    })
    return (
        <Container >
            <InnerContainer>
                <ImageContainer backgroundImage={`url(${bg.src})`}>
                    <ItemNameContainer>
                        {name}hi
                    </ItemNameContainer>
                </ImageContainer>
                <DescriptionContainer>
                    {body}
                </DescriptionContainer>
                <TagsContainer>
                    {elementTags}
                </TagsContainer>
            </InnerContainer>
        </Container>
    )
}

/*
.::: USAGE :::.

*/