import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlus2Bold = ({
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
      d="M2.5 12A9.5 9.5 0 0 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-19 0m10.25-3.296a.75.75 0 0 0-1.5 0v2.548H8.7a.75.75 0 0 0 0 1.5h2.55v2.545a.75.75 0 0 0 1.5 0v-2.545h2.55a.75.75 0 0 0 0-1.5h-2.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlus2Bold;