import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEASportsCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.321 7.934c.293 0 .56.17.682.437l2.93 6.391a.75.75 0 1 1-1.364.625l-2.248-4.903-2.247 4.903a.75.75 0 0 1-1.364-.625l2.93-6.39a.75.75 0 0 1 .681-.438"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.837 13.707a.75.75 0 0 1 .75-.75h2.002a.75.75 0 0 1 0 1.5h-2.002a.75.75 0 0 1-.75-.75M6 11.652a.75.75 0 0 1 .75-.75h3.196a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.75-.75M7.37 8.683a.75.75 0 0 1 .75-.75h3.196a.75.75 0 0 1 0 1.5H8.12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.513 10.963a.75.75 0 0 1 .394.985l-1.02 2.378h3.504a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.69-1.045l1.468-3.424a.75.75 0 0 1 .985-.394"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEASportsCircleOutline;
