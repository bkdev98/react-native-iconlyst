import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSublumeTextLight = ({
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
      d="M18.926 12.054a.258.258 0 0 0-.347-.272L5.42 15.955a.54.54 0 0 0-.347.492v4.265a.257.257 0 0 0 .347.272l13.16-4.172a.54.54 0 0 0 .347-.493z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.072 11.917c.006.22.143.413.347.492l13.162 4.174a.257.257 0 0 0 .347-.272v-4.265a.54.54 0 0 0-.347-.492L5.42 7.38a.257.257 0 0 0-.347.272z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.926 3.289a.258.258 0 0 0-.347-.272L5.42 7.189a.54.54 0 0 0-.347.493v4.265a.258.258 0 0 0 .347.272l13.16-4.173a.54.54 0 0 0 .347-.492z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSublumeTextLight;
