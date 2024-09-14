import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislike2TwoTone = ({
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
      d="M19.73 5.183a5.4 5.4 0 0 0-2.094-1.233c-1.752-.55-3.994.024-5.135 2.185A4.32 4.32 0 0 0 7.356 3.95c-3.333 1.073-4.52 4.701-3.504 7.878.71 2.204 2.184 4.079 3.734 5.495"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.341 8.12a7.16 7.16 0 0 1-.192 3.707c-1.582 5.03-7.352 8.418-8.648 8.418-.446 0-1.417-.395-2.565-1.121"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.348 18.561 21.155 3.754"
    />
  </Svg>
);
export default IconlystDislike2TwoTone;
