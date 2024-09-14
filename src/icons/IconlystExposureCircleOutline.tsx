import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureCircleOutline = ({
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
      d="M19.213 5.174a.75.75 0 0 1-.01 1.06l-12.855 12.6a.75.75 0 0 1-1.05-1.07l12.855-12.6a.75.75 0 0 1 1.06.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.153 5.164a.75.75 0 0 1 1.06.01A9.72 9.72 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75 9.72 9.72 0 0 1-6.962-2.925.75.75 0 1 1 1.07-1.05 8.22 8.22 0 0 0 5.893 2.475 8.25 8.25 0 0 0 8.25-8.25 8.22 8.22 0 0 0-2.359-5.775.75.75 0 0 1 .01-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12c0-5.384 4.366-9.75 9.75-9.75a9.73 9.73 0 0 1 6.962 2.925.75.75 0 0 1-1.07 1.05 8.25 8.25 0 0 0-11.784 11.55.75.75 0 1 1-1.071 1.05A9.72 9.72 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.95 6.61a.75.75 0 0 1 .75.75v3.458a.75.75 0 0 1-1.5 0V7.36a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.47 9.09a.75.75 0 0 1 .75-.75h3.459a.75.75 0 1 1 0 1.5h-3.46a.75.75 0 0 1-.75-.75M12.564 15.184a.75.75 0 0 1 .75-.75h3.458a.75.75 0 0 1 0 1.5h-3.458a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExposureCircleOutline;
