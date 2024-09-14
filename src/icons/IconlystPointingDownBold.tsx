import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingDownBold = ({
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
      d="M19.535 12.346c1.01-2.726.015-6.335-1.755-8.106-2.258-2.257-8.57-2.43-10.637.14-1.31 1.63-2.33 3.61-2.973 5.383-.345.951.161 1.977 1.106 2.34.836.32 1.783.027 2.29-.71l1.27-1.842v10.176a1.773 1.773 0 0 0 3.547.026l.07-4.588c2.483-.238 6.078-.11 7.082-2.819"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPointingDownBold;
