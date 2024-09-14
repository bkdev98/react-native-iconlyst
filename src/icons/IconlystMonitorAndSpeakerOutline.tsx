import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorAndSpeakerOutline = ({
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
      d="M12.577 7.638a3.256 3.256 0 0 1 3.255-3.255h2.912A3.255 3.255 0 0 1 22 7.638v8.725a3.255 3.255 0 0 1-3.253 3.255h-2.913a3.255 3.255 0 0 1-3.255-3.255zm1.5 0 .001 8.725c0 .97.786 1.755 1.755 1.755h2.912c.969 0 1.755-.786 1.755-1.755l-.001-8.725c0-.97-.785-1.755-1.755-1.755h-2.911c-.97 0-1.756.786-1.756 1.755"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.219 8.648a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M15.111 13.959a2.178 2.178 0 1 1 4.356 0 2.178 2.178 0 0 1-4.356 0m2.178-.678a.678.678 0 1 0 0 1.356.678.678 0 0 0 0-1.356M5.7 18.629a.75.75 0 0 1 .75-.75h4.186a.75.75 0 0 1 0 1.5H6.449a.75.75 0 0 1-.75-.75M5.379 6.082C4.617 6.082 4 6.699 4 7.46v6.247c0 .762.617 1.379 1.379 1.379h5.259a.75.75 0 0 1 0 1.5h-5.26A2.88 2.88 0 0 1 2.5 13.707V7.46c0-1.59 1.29-2.878 2.879-2.878h5.259a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorAndSpeakerOutline;
