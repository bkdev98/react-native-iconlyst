import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare6TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.586 15.764c0 2.604 1.621 4.443 4.228 4.443h7.456c2.608 0 4.23-1.84 4.23-4.443V8.737c0-2.604-1.622-4.444-4.23-4.444H9.815c-2.598 0-4.228 1.84-4.228 4.444v3.627"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 10.258 2.105 2.105 2.093-2.093"
    />
  </Svg>
);
export default IconlystRefreshSquare6TwoTone;
