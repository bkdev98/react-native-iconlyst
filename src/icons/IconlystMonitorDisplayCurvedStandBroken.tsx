import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurvedStandBroken = ({
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
      d="M12.5 3h5.981a3 3 0 0 1 3 3v7.485a3 3 0 0 1-3 3.002H6.52a3 3 0 0 1-3.001-3.002V6c0-1.656 1.343-3 3-3h2.183M6.219 21.001c3.47-1.194 9.096-1.194 12.566 0"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurvedStandBroken;
