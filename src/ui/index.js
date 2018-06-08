import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-left: -1em;
  width: calc(100% + 1em);
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
`;

export const InlineList = List.extend`
  width: auto;

  > li + li {
    margin-left: 0.5em;

    @media screen and (min-width: 350px) {
      margin-left: 1em;
    }
  }
`;

export const ListItem = styled.li`
  flex: 0 0 100%;
  padding-left: 1em;
  padding-bottom: 1em;
  margin-bottom: 0;

  @media screen and (min-width: 800px) {
    flex: 0 0 33.333%;
  }
`;
