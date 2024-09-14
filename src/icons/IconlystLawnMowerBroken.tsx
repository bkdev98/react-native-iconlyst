import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLawnMowerBroken = ({
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
      d="M7.315 20.016a2.906 2.906 0 1 0-1.063-2.683"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 3.348h1.862l2.865 11.566"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.535 7.072 4.528 8.14c-.53.28-.752.922-.512 1.47l1.47 3.358"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.75 18.668a1.984 1.984 0 1 0-3.968 0 1.984 1.984 0 0 0 3.968 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.174 15.097h1.274M12.035 18.282h5.746M20.745 16.95l.202-2.185a1.76 1.76 0 0 0-1.36-1.876l-3.075-.691M7.29 10.122l6.148 1.384M11.56 7.877l6.697 1.52"
    />
  </Svg>
);
export default IconlystLawnMowerBroken;
