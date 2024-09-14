import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndSpeakerBulk = ({
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
      d="M10.386 17.874H6.199a.75.75 0 0 0 0 1.5h4.187a.75.75 0 0 0 0-1.5M10.89 15.826v-10.5c0-.28-.23-.5-.5-.5H5.13c-1.45 0-2.63 1.18-2.63 2.63v6.25c0 1.45 1.18 2.62 2.63 2.62h5.26c.27 0 .5-.22.5-.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.49 4.626h-2.91c-1.65 0-3 1.35-3 3.01v8.72a3.01 3.01 0 0 0 3 3.01h2.92c1.65 0 3-1.35 3-3.01v-8.72c0-1.66-1.35-3.01-3.01-3.01"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.04 16.125c-1.2 0-2.18-.97-2.18-2.17s.98-2.18 2.18-2.18 2.18.98 2.18 2.18-.98 2.17-2.18 2.17m-.68-2.17a.68.68 0 0 1 1.36 0c0 .37-.31.67-.68.67s-.68-.3-.68-.67M16.97 8.646c.41 0 .75.33.75.75v.01a.749.749 0 1 1-1.5 0c0-.42.33-.76.75-.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorAndSpeakerBulk;
