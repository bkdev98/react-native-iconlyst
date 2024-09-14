import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCipherBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m17.812 12.445-1.617 1.62a.634.634 0 0 1-.885 0l-1.617-1.62a.633.633 0 0 1 0-.89l1.617-1.61a.616.616 0 0 1 .885 0l1.617 1.61a.63.63 0 0 1 0 .89m-3.752 3.76-1.617 1.61a.616.616 0 0 1-.885 0l-1.617-1.61a.633.633 0 0 1 0-.89l1.617-1.62a.634.634 0 0 1 .885 0l1.617 1.62a.63.63 0 0 1 0 .89m-6.256-2.14-1.617-1.62a.633.633 0 0 1 0-.89l1.617-1.61a.616.616 0 0 1 .885 0l1.617 1.61a.63.63 0 0 1 0 .89l-1.617 1.62a.634.634 0 0 1-.885 0m2.135-6.26 1.617-1.62a.634.634 0 0 1 .885 0l1.617 1.62a.63.63 0 0 1 0 .89l-1.617 1.61a.616.616 0 0 1-.885 0l-1.617-1.61a.633.633 0 0 1 0-.89M12 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCipherBold;
