import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseCircleOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.094 9.281a.75.75 0 0 1 .75-.75h1.772a2.11 2.11 0 1 1 0 4.219h-1.772a.75.75 0 0 1-.75-.75zm1.5.75v1.219h1.022a.61.61 0 1 0 0-1.219z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.094 12a.75.75 0 0 1 .75-.75h1.772a2.11 2.11 0 1 1 0 4.219h-1.772a.75.75 0 0 1-.75-.75zm1.5.75v1.219h1.022a.61.61 0 1 0 0-1.219zM6.777 9.288a.75.75 0 0 1 .75-.75h1.107a3.447 3.447 0 0 1 0 6.895H7.527a.75.75 0 0 1-.75-.75zm1.5.75v3.895h.357a1.948 1.948 0 0 0 0-3.895z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseCircleOutline;
