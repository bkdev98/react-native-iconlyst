import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockTwoTone = ({
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
      d="M18.385 16.233v-.9a1.456 1.456 0 0 0-2.911-.007v.907M18.148 20H15.71a1.21 1.21 0 0 1-1.211-1.21V17.42c0-.668.541-1.21 1.21-1.21h2.44c.667 0 1.21.542 1.21 1.21v1.369a1.21 1.21 0 0 1-1.21 1.21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.942 19.717c0-2.071 1.635-4.65 6.345-4.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.338 8.053a4.053 4.053 0 1 1-8.105-.001 4.053 4.053 0 0 1 8.105 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLockTwoTone;
