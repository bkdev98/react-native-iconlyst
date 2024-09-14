import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper6Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.19 4.953h11.622c1.965 0 3.188 1.388 3.188 3.35v7.398c0 1.963-1.223 3.35-3.19 3.35H6.19c-1.965 0-3.187-1.387-3.187-3.35V8.303c0-1.962 1.228-3.35 3.187-3.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.803 19.05a3.36 3.36 0 0 1 .783-3.554 3.34 3.34 0 0 1 3.41-.82M3 14.677a3.36 3.36 0 0 1 3.419.819 3.37 3.37 0 0 1 .775 3.554M7.185 4.95a3.35 3.35 0 0 1-.765 3.562 3.36 3.36 0 0 1-3.42.82M16.814 4.95a3.34 3.34 0 0 0 .773 3.562 3.34 3.34 0 0 0 3.411.82"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.29 12.002a2.288 2.288 0 1 0-4.576.001 2.288 2.288 0 0 0 4.576 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper6Light;
