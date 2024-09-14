import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnderlineBold = ({
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
      d="M18 18H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2M12 16c2.757 0 5-2.243 5-5V5a1 1 0 1 0-2 0v6c0 1.654-1.346 3-3 3s-3-1.346-3-3V5a1 1 0 1 0-2 0v6c0 2.757 2.243 5 5 5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnderlineBold;
