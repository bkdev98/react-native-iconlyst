import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallTickBroken = ({
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
      d="M8.777 15.545c8.056 8.054 10.347 4.565 10.708 4.275 2.88-2.88 1.574-3.334-.7-5.607-2.357-2.355-3.459 2.188-7.162-1.514s.839-4.805-1.519-7.163c-2.273-2.273-2.72-3.586-5.608-.7-.26.325-3.098 2.209 2.165 8.425M14.95 6.335l2.14 2.145 4.41-4.414"
    />
  </Svg>
);
export default IconlystPhoneCallTickBroken;
