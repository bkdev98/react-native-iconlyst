import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomepodSpeakerBold = ({
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
      d="M12 8.022c-2.427 0-5.04-.611-5.04-1.953S9.573 4.116 12 4.116s5.04.611 5.04 1.953S14.427 8.022 12 8.022m6.61-3.806C17.428 3.029 15.393 2.5 12.016 2.5c-7.416 0-7.99 2.83-7.99 6.827v5.346c0 3.997.574 6.827 7.99 6.827 3.377 0 5.412-.529 6.595-1.716 1.268-1.27 1.369-3.143 1.364-5.111V9.328c.005-1.969-.096-3.842-1.364-5.112"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomepodSpeakerBold;
