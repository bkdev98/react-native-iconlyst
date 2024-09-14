import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStand2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.994 3.283H6.007A3.007 3.007 0 0 0 3 6.29v7.5a3.01 3.01 0 0 0 3.007 3.008h11.987A3.007 3.007 0 0 0 21 13.79v-7.5a3.007 3.007 0 0 0-3.006-3.007"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.055 20.717h7.89M3 13.242h18M12 17.004v3.713"
    />
  </Svg>
);
export default IconlystMonitorDisplayStand2Light;
