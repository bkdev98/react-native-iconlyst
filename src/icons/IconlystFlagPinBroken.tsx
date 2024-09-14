import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlagPinBroken = ({
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
      d="M15.71 13.775c3.167.564 5.405 1.905 5.405 3.458 0 2.086-3.966 3.767-8.86 3.767M8.788 13.777c-3.177.575-5.404 1.905-5.404 3.458 0 1.43 1.87 2.67 4.625 3.309M12.248 9.855l7.2-3.428L12.248 3v13.71"
    />
  </Svg>
);
export default IconlystFlagPinBroken;
