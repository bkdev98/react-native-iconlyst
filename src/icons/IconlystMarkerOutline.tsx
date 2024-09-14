import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.9 12a.75.75 0 0 1 .75-.75h3.6a.75.75 0 1 1 0 1.5h-3.6a.75.75 0 0 1-.75-.75M2.5 12a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 0 1.5h-3.6A.75.75 0 0 1 2.5 12M12.25 2.25A.75.75 0 0 1 13 3v3.6a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M12.25 16.648a.75.75 0 0 1 .75.75v3.6a.75.75 0 0 1-1.5 0v-3.6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMarkerOutline;
