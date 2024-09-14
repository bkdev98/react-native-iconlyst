import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoadTwoTone = ({
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
      d="m3.65 17.764 2.568.594.59-2.553M21.65 6.238l-2.567-.593-.59 2.553"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.469 15.926c0-1.157.916-2.602 3.544-2.602 2.635 0 3.552 1.431 3.552 2.588"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.246 18.138a8.857 8.857 0 0 1 7.939-14.87M19.056 5.86a8.856 8.856 0 0 1-7.939 14.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.28 9.128a2.265 2.265 0 1 1-4.53.001 2.265 2.265 0 0 1 4.53 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserLoadTwoTone;
