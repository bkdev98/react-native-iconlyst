import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsBold = ({
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
      d="M17.367 9.845C17.144 8.02 15.692 4.922 12 4.922S6.856 8.02 6.634 9.845C4.177 10.07 2.5 11.912 2.5 14.462a4.67 4.67 0 0 0 2.752 4.245 5.2 5.2 0 0 0 1.848.375h9.794c.351 0 1.059-.05 1.879-.384a4.66 4.66 0 0 0 2.727-4.236c0-2.55-1.677-4.391-4.133-4.617"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudsBold;
