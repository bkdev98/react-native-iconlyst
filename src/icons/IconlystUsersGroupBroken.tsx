import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersGroupBroken = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.546 19.566c.893 0 1.43-.644 1.474-1.54.01-1.82-1.777-2.449-4.467-2.477-2.685.021-4.467.65-4.467 2.476.038.897.58 1.54 1.474 1.54h2.993"
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.554 13.234a2.335 2.335 0 1 0 0-4.67 2.335 2.335 0 0 0 0 4.67Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.11 10.885c-2.23.017-3.71.54-3.71 2.056.032.745.481 1.28 1.224 1.28h2.888M17.691 10.885c2.23.017 3.71.54 3.71 2.056-.032.745-.482 1.28-1.225 1.28H17.29M6.845 4.436a1.939 1.939 0 1 1-1.663.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.956 4.436a1.939 1.939 0 1 0 1.713 1.03"
    />
  </Svg>
);
export default IconlystUsersGroupBroken;
