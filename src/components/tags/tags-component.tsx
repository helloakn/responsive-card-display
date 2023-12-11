import styled from 'styled-components';

// --------------  Interfaces & Types

interface ITag { text?: string; }


// --------------  Elements

const Container = styled.div<ITag>`
  background-color:#AFD257;
   padding-left:10px;
   padding-right:10px;
   height:30px;
   line-height: 25px;
    margin-left:10px;
    margin-top:10px;
    border-radius: 5px;
    text-decoration: none;
    color:#fff;
    border: 1px solid yellow;
    font-size:12px;
    text-align: center;
`;

// --------------  Functions

export default function Tag({ ...props }: ITag) {

    return <Container > {props.text} </Container>
}

/*
.::: USAGE :::.

*/