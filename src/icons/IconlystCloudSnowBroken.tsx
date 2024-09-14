import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSnowBroken = ({
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
      d="M18.814 16.73a4.14 4.14 0 0 0 2.436-3.775c0-2.595-1.83-4.139-4.103-4.14 0-.998-.478-2.604-1.674-3.704M12.25 3.918c-3.617 0-4.897 3.265-4.897 4.898-2.27.02-4.103 1.545-4.103 4.14 0 1.68 1 3.126 2.436 3.775M9.365 15.765l.007-.038m-.007 2.918.007-.038m2.874-1.44.007.038m-.007 2.88.007-.038m2.874-4.32.007.037m-.007 2.881.007-.038"
    />
  </Svg>
);
export default IconlystCloudSnowBroken;
