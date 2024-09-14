import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitoringTemperatureOutline = ({
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
      d="M10.59 3.75A2.25 2.25 0 0 0 8.34 6v6.022a.75.75 0 0 1-.297.599C7.01 13.4 6.34 14.62 6.34 16a4.25 4.25 0 0 0 8.5 0c0-1.38-.668-2.598-1.701-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M6.84 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335zM19.64 5.532h-2.282a.75.75 0 0 1 0-1.5h2.282a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.592 15.276a.724.724 0 1 0 0 1.448.724.724 0 0 0 0-1.448M8.368 16a2.224 2.224 0 1 1 4.447 0 2.224 2.224 0 0 1-4.447 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.59 6.977a.75.75 0 0 1 .75.75v6.8a.75.75 0 0 1-1.5 0v-6.8a.75.75 0 0 1 .75-.75M16.05 10.21a.75.75 0 0 1 .75-.75h2.84a.75.75 0 0 1 0 1.5H16.8a.75.75 0 0 1-.75-.75M17.608 7.496a.75.75 0 0 1 .75-.75h1.282a.75.75 0 0 1 0 1.5h-1.282a.75.75 0 0 1-.75-.75M17.608 12.668a.75.75 0 0 1 .75-.75h1.282a.75.75 0 0 1 0 1.5h-1.282a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitoringTemperatureOutline;
