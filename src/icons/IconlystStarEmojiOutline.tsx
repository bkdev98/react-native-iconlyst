import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarEmojiOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.82 4.51 9.99 8.159v.002c-.293.579-.85.978-1.492 1.068h-.001L4.4 9.82a.461.461 0 0 0-.26.788l2.958 2.84.001.001c.47.45.686 1.104.574 1.745l-.699 4.008a.478.478 0 0 0 .696.494l.006-.003 3.656-1.895a2 2 0 0 1 1.837 0l3.66 1.897a.478.478 0 0 0 .697-.494l-.698-4.005a1.95 1.95 0 0 1 .575-1.75l2.955-2.838a.461.461 0 0 0-.259-.789l-.01-.001-4.087-.589h-.001c-.641-.09-1.2-.49-1.492-1.07L12.684 4.51a.5.5 0 0 0-.205-.205h-.002a.49.49 0 0 0-.658.205m1.347-1.538a1.99 1.99 0 0 0-2.682.851L8.651 7.484v.001a.48.48 0 0 1-.363.259L4.2 8.333a1.962 1.962 0 0 0-1.1 3.355h.002l2.961 2.843h.001a.45.45 0 0 1 .134.404l-.7 4.014-.002.008c-.07.427.004.862.204 1.241v.002a1.98 1.98 0 0 0 2.671.822l3.653-1.893a.5.5 0 0 1 .458 0l3.647 1.89.003.002c.38.2.813.272 1.236.204h.002a1.98 1.98 0 0 0 1.639-2.268l-.702-4.021v-.002a.45.45 0 0 1 .132-.402l2.962-2.846a1.961 1.961 0 0 0-1.1-3.355l-4.086-.588h-.002a.48.48 0 0 1-.361-.258l-1.828-3.652-.005-.01a2 2 0 0 0-.851-.85"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.127 10.342a.9.9 0 1 1-.9.901v-.001a.9.9 0 0 1 .9-.9M10.377 10.342a.9.9 0 1 1-.9.901v-.001a.9.9 0 0 1 .9-.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 16.062h-.027a2.9 2.9 0 0 1-2.165-1.044.749.749 0 0 1 .607-1.246.75.75 0 0 1 .516.251 1.337 1.337 0 0 0 2.153-.012.75.75 0 0 1 1.1 1.02 2.89 2.89 0 0 1-2.183 1.031"
    />
  </Svg>
);
export default IconlystStarEmojiOutline;
