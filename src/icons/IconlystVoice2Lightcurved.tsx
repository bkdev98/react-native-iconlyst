import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Lightcurved = ({
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
      d="M6.604 13.832a5.386 5.386 0 0 0 10.772 0M17.376 10.74V8.598a5.385 5.385 0 1 0-10.772 0v2.142M11.99 21.263v-2.045M5.212 13.832h13.556M10.497 10.452h2.985M12.491 7.682h-1.003"
    />
  </Svg>
);
export default IconlystVoice2Lightcurved;
