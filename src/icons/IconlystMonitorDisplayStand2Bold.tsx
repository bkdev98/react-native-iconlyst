import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStand2Bold = ({
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
      d="M2.51 13.864h18.98a3.51 3.51 0 0 1-3.5 3.31h-5.24v2.67h3.2a.749.749 0 1 1 0 1.5h-7.9a.749.749 0 1 1 0-1.5h3.2v-2.67H6.01c-1.87 0-3.4-1.47-3.5-3.31M21.5 6.164v6.2h-19v-6.2c0-1.94 1.57-3.51 3.51-3.51h11.98c1.94 0 3.51 1.57 3.51 3.51"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayStand2Bold;
