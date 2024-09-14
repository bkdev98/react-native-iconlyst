import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinCheckBold = ({
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
      d="m15.713 8.976-4.033 4.035a.75.75 0 0 1-1.061-.001l-1.957-1.96a.751.751 0 0 1 1.062-1.06l1.427 1.429 3.501-3.504a.75.75 0 1 1 1.061 1.061M12 2.5c-4.425 0-8.026 3.601-8.026 8.027C3.974 16.163 10.566 21.5 12 21.5s8.026-5.337 8.026-10.973c0-4.426-3.6-8.027-8.026-8.027"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinCheckBold;
