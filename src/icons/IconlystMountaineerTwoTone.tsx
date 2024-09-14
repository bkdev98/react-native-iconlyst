import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMountaineerTwoTone = ({
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
      d="M9.28 17.253 7.614 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.523 6.908a1.956 1.956 0 0 0 1.955-1.953c0-1.08-.88-1.955-1.955-1.955a1.957 1.957 0 0 0-1.955 1.955c0 1.08.88 1.953 1.955 1.953"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.385 9.763c-.841.42-1.654 1.068-2.65 1.01-1.1-.066-2.145-.847-3.276-.54-1.008.273-1.61 1.119-1.666 2.13-.11 2.01 2.075 2.7 2.937 4.224.74 1.308.725 2.971.755 4.41M17.385 8.297V21"
    />
  </Svg>
);
export default IconlystMountaineerTwoTone;
