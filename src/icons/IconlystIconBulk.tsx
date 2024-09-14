import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.239 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.482 8.66a.75.75 0 0 0 .75-.75V7.9a.746.746 0 0 0-.75-.746.755.755 0 0 0-.75.755c0 .414.336.75.75.75M10.609 15.844c.56.272 1.194.415 1.838.415a4.216 4.216 0 0 0 4.212-4.21c0-.648-.143-1.267-.423-1.84a.75.75 0 1 0-1.348.66 2.715 2.715 0 0 1-2.441 3.89c-.417 0-.826-.09-1.182-.265a.752.752 0 0 0-.656 1.35M9.294 14.22a.75.75 0 0 0 .677-1.069 2.6 2.6 0 0 1-.235-1.102 2.71 2.71 0 0 1 2.712-2.7c.394 0 .773.08 1.096.23a.75.75 0 0 0 .634-1.359 4.1 4.1 0 0 0-1.73-.37 4.21 4.21 0 0 0-4.212 4.2c0 .62.127 1.205.378 1.738a.75.75 0 0 0 .68.431M8.43 16.71a.75.75 0 0 0 .75-.75v-.01a.746.746 0 0 0-.75-.746.755.755 0 0 0-.75.755c0 .414.337.75.75.75"
    />
  </Svg>
);
export default IconlystIconBulk;
