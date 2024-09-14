import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoNotTouchLight = ({
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
      d="M18.168 18.5c1.222-1.82 1.785-4.627.97-6.828-.952-2.567-4.357-2.445-6.709-2.67l-.066-4.347a1.68 1.68 0 0 0-3.361.025V8.5M4.5 4.09l15.67 16.523M9.001 14.32 7.8 12.576a1.84 1.84 0 0 0-2.17-.673c-.895.343-1.374 1.315-1.048 2.216.609 1.68 1.575 3.555 2.817 5.1 1.607 1.998 5.922 2.247 8.601 1.089"
    />
  </Svg>
);
export default IconlystDoNotTouchLight;
