import styled, { css } from 'styled-components'

export const Grid = styled.div`
  display: grid;
  margin: ${props => props.margin || '0'};
  grid-template-columns: repeat(3, 33%);
`;

export const Wrapper = styled.div`
  position: relative;
  background: ${props => props.background || 'transparent'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  min-width: ${props => props.minWidth || '0'};
  max-width: ${props => props.maxWidth || 'none'};
  max-height: ${props => props.maxHeight || '100%'};
  min-height: ${props => props.minHeight || 'auto'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  border: ${props => props.border || '0'};
  border-radius: ${props => props.borderRadius || '0'};
  cursor: ${props => props.cursor || 'initial'};
  z-index: ${props => props.zIndex || 'auto'};
  ${props => (props.overflow && css`
    overflow-y: ${props.overflow};
  `)}
  ${props => (props.overflowX && css`
    overflow-x: ${props.overflowX};
  `)}
  ${props => (props.boxShadow && css`
    box-shadow: ${props.boxShadow || 'none'};
  `)}
  ${props => (props.hoverBorder && css`
    &:hover {
      border-color: ${props.hoverBorder};
    }    
  `)}
  ${props => (props.withCustomScrollbar && css`
    &::-webkit-scrollbar {
      width: 18px;
      background-color: rgba(216,216,216,0.6);
      border-radius: 8.5px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(216,216,216,0.6);
      border-radius: 8.5px;
    }

    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border-radius: 8.5px;
      background: linear-gradient(180deg, #AADCA7 0%, #6FC46A 100%);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  `)}
`;
