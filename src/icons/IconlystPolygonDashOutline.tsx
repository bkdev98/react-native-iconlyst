import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonDashOutline = ({
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
      d="M9.339 21a.75.75 0 0 1 .75-.75h4.32a.75.75 0 0 1 0 1.5h-4.32a.75.75 0 0 1-.75-.75M20.671 16.306a.75.75 0 0 1 0 1.06l-3.055 3.055a.75.75 0 0 1-1.06-1.06l3.055-3.055a.75.75 0 0 1 1.06 0M3.827 16.306a.75.75 0 0 1 1.06 0l3.056 3.055a.75.75 0 0 1-1.06 1.06l-3.056-3.055a.75.75 0 0 1 0-1.06M3.25 9.09a.75.75 0 0 1 .75.75v4.32a.75.75 0 1 1-1.5 0V9.84a.75.75 0 0 1 .75-.75M7.943 3.577a.75.75 0 0 1 0 1.06L4.888 7.694a.75.75 0 0 1-1.06-1.06l3.054-3.056a.75.75 0 0 1 1.06 0M9.34 3a.75.75 0 0 1 .75-.75h4.32a.75.75 0 1 1 0 1.5h-4.32A.75.75 0 0 1 9.34 3M16.556 3.578a.75.75 0 0 1 1.06 0l3.055 3.055a.75.75 0 1 1-1.06 1.06L16.556 4.64a.75.75 0 0 1 0-1.06M21.25 9.09a.75.75 0 0 1 .75.75v4.32a.75.75 0 1 1-1.5 0V9.84a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygonDashOutline;
