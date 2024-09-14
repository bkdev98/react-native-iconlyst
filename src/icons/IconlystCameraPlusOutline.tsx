import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraPlusOutline = ({
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
      d="M16.147 7.148a.75.75 0 0 1 .75-.75h4.228a.75.75 0 0 1 0 1.5h-4.228a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.014 4.285a.75.75 0 0 1 .75.75v4.229a.75.75 0 0 1-1.5 0V5.035a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.303 4.887c-.538 0-1.036.293-1.297.765-.136.248-.283.505-.421.729a4.4 4.4 0 0 1-.436.61 2.65 2.65 0 0 1-1.837.815A2.31 2.31 0 0 0 4 10.114v5.643a3.356 3.356 0 0 0 3.356 3.356h9.788a3.356 3.356 0 0 0 3.356-3.356V12.06a.75.75 0 0 1 1.5 0v3.697a4.856 4.856 0 0 1-4.856 4.856H7.356A4.856 4.856 0 0 1 2.5 15.757v-5.643a3.813 3.813 0 0 1 3.794-3.808c.29-.015.561-.137.762-.344.044-.05.13-.17.252-.369.12-.195.254-.428.384-.665l.001-.001a2.98 2.98 0 0 1 2.61-1.54h3.912a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.408 13.105a3.843 3.843 0 1 1 7.687 0 3.843 3.843 0 0 1-7.687 0m3.843-2.343a2.343 2.343 0 1 0 0 4.686 2.343 2.343 0 0 0 0-4.686"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraPlusOutline;
