import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortingZToAOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.92 5.953a.75.75 0 0 1 .75.75v9.826l1.629-1.629a.75.75 0 1 1 1.06 1.06L8.45 18.87a.75.75 0 0 1-1.06 0l-2.91-2.91a.75.75 0 1 1 1.061-1.06L7.17 16.53V6.703a.75.75 0 0 1 .75-.75M15.045 19.188a.75.75 0 0 1 .75-.75h3.535a.75.75 0 0 1 0 1.5h-3.535a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.561 14.195a.75.75 0 0 1 .692.461l2.428 5.82a.75.75 0 0 1-1.384.577l-1.736-4.16-1.737 4.16a.75.75 0 0 1-1.384-.578l2.429-5.819a.75.75 0 0 1 .692-.46M14.87 4.766a.75.75 0 0 1 .75-.75H19.5a.75.75 0 0 1 .624 1.166L17.02 9.834H19.5a.75.75 0 0 1 0 1.5H15.62a.75.75 0 0 1-.624-1.166l3.101-4.652H15.62a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortingZToAOutline;
