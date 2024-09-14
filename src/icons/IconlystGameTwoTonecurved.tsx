import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameTwoTonecurved = ({
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
      d="M9.255 13.063v3.575m1.824-1.788H7.432M15.477 13.171h-.102M17.208 16.583h-.102M8.514 3.216a1.293 1.293 0 0 0 1.306 1.28h1.008a2.005 2.005 0 0 1 2.02 1.978v1.007"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.812 14.895c0-5.56-2.387-7.414-9.547-7.414-7.162 0-9.549 1.854-9.549 7.414 0 5.561 2.387 7.414 9.549 7.414 7.16 0 9.547-1.853 9.547-7.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameTwoTonecurved;
