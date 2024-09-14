import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStand2TwoTone = ({
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
      d="M18.494 3.283H6.507A3.007 3.007 0 0 0 3.5 6.29v7.5a3.01 3.01 0 0 0 3.007 3.008h11.987A3.007 3.007 0 0 0 21.5 13.79v-7.5a3.007 3.007 0 0 0-3.006-3.007"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 13.242h18M8.555 20.717h7.89M12.5 17.004v3.713"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMonitorDisplayStand2TwoTone;
