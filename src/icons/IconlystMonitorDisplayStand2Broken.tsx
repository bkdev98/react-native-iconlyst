import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayStand2Broken = ({
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
      d="M12.5 3.283h5.994A3.007 3.007 0 0 1 21.5 6.29v7.5a3.007 3.007 0 0 1-3.006 3.008H6.507A3.01 3.01 0 0 1 3.5 13.79v-7.5a3.007 3.007 0 0 1 3.007-3.007h2.58M8.555 20.717h7.89M3.5 13.242h15.204M12.5 17.004v3.713"
    />
  </Svg>
);
export default IconlystMonitorDisplayStand2Broken;
