import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadLight = ({
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
      d="m3 17.762 2.568.594.59-2.553M21 6.238l-2.568-.593-.59 2.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.596 18.14a8.856 8.856 0 0 1 7.938-14.87M18.405 5.861a8.856 8.856 0 0 1-7.939 14.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 16.56c0-1.156.917-2.601 3.545-2.601 2.634 0 3.55 1.431 3.55 2.588"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.31 9.765a2.265 2.265 0 1 1-4.529 0 2.265 2.265 0 0 1 4.53 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLoadLight;
