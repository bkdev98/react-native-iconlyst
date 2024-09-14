import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndCaseBulk = ({
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
      d="M18.52 4.463h-2.5c-1.64 0-2.98 1.33-2.98 2.98l.01 9.1c0 1.65 1.33 2.98 2.97 2.98h2.5c1.65 0 2.98-1.34 2.98-2.98v-9.11c0-1.64-1.34-2.97-2.98-2.97"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.183 16.027V5.64a.5.5 0 0 0-.5-.5H5.105A2.607 2.607 0 0 0 2.5 7.746v6.176a2.607 2.607 0 0 0 2.605 2.605h5.578a.5.5 0 0 0 .5-.5M10.683 18.037H6.164a.75.75 0 0 0 0 1.5h4.519a.75.75 0 0 0 0-1.5M18.54 10.113H16c-.41 0-.75-.33-.75-.74 0-.42.34-.76.75-.76h2.54c.42 0 .75.34.75.76 0 .41-.33.74-.75.74m0 2.5H16c-.41 0-.75-.33-.75-.74 0-.42.34-.76.75-.76h2.54c.42 0 .75.34.75.76 0 .41-.33.74-.75.74m-.52 3.71a.749.749 0 1 1-1.5 0c0-.42.34-.79.75-.79.42 0 .75.3.75.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorAndCaseBulk;
