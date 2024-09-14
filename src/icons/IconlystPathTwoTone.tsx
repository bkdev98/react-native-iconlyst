import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.683 5.5a2.5 2.5 0 1 1-5 .001 2.5 2.5 0 0 1 5 0M21.682 18.5a2.5 2.5 0 1 1-4.999 0 2.5 2.5 0 0 1 4.999 0M6.183 16a2.5 2.5 0 1 1 0 4.999 2.5 2.5 0 0 1 0-4.999M19.182 3a2.5 2.5 0 1 1 0 4.998 2.5 2.5 0 0 1 0-4.998"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.184 8v4m2.499 6.499h4m6.499-6.5v4M16.682 5.5h-3.999"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPathTwoTone;
