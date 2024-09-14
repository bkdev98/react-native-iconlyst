import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLightsharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.764 14.707c3.127-.008 5.787 1.428 6.764 4.52-1.97 1.2-4.29 1.663-6.764 1.657-2.475.006-4.794-.457-6.764-1.658.978-3.094 3.633-4.527 6.764-4.519Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.335 18.233c1.89.004 3.66-.349 5.165-1.266-.746-2.36-2.777-3.457-5.165-3.45-1.504-.005-2.865.427-3.853 1.337M14 7.353a4.237 4.237 0 1 1-8.473 0 4.237 4.237 0 0 1 8.474 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M13.964 5.67a3.241 3.241 0 1 1-.303 4.106"
    />
  </Svg>
);
export default IconlystUserLightsharp;
