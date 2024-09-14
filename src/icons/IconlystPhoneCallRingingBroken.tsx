import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRingingBroken = ({
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
      d="M12.498 11.852c9.674-.001 8.96 3.47 9.002 3.86 0 3.468-1.058 2.948-3.788 2.948-2.83 0-.767-3.39-5.214-3.39-4.448 0-2.38 3.392-5.21 3.393-2.73 0-3.788.511-3.788-2.948.038-.343-.512-3.06 5.899-3.72M8.68 8.643 7.14 7.266m5.28-.008V5.311m3.74 3.332 1.54-1.377"
    />
  </Svg>
);
export default IconlystPhoneCallRingingBroken;
