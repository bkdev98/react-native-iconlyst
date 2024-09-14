import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingUpBulk = ({
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
      d="M20.035 11.654c1.01 2.726.015 6.335-1.755 8.105-2.259 2.258-8.57 2.43-10.637-.139-1.312-1.63-2.33-3.61-2.973-5.383-.344-.951.161-1.977 1.106-2.34a1.94 1.94 0 0 1 2.29.71l1.27 1.842V4.273a1.774 1.774 0 0 1 3.547-.026l.07 4.588c2.484.238 6.078.11 7.082 2.819"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPointingUpBulk;
