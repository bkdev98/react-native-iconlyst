import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLTESqaureBroken = ({
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
      d="M18.486 9.73H16.27v4.545h2.216M16.273 12h1.771M13.998 9.73h-3.033M12.48 9.725v4.548M9.732 14.275H7.896V9.727"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.21 21c2.95 0 4.784-2.081 4.784-5.026V8.026C21.994 5.081 20.16 3 17.211 3H8.776C5.837 3 3.994 5.081 3.994 8.026v7.948C3.994 18.919 5.827 21 8.776 21h4.721"
    />
  </Svg>
);
export default IconlystLTESqaureBroken;
