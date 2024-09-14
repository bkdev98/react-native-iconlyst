import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftTwiceBulk = ({
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
      d="M3.582 16.035c0-.092.03-.177.053-.262.011-.038.008-.08.024-.117a1 1 0 0 1 .227-.336l3.954-3.953a.999.999 0 1 1 1.414 1.414L7 15.037h13.418a1 1 0 1 1 0 2H6.993l2.261 2.258A1 1 0 0 1 7.84 20.71l-3.965-3.962a1 1 0 0 1-.293-.709z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.418 8.586h-5.804l1.875 1.875a1 1 0 1 1-1.414 1.415L11.53 8.33a1 1 0 0 1-.038-1.452l3.584-3.584a.999.999 0 1 1 1.414 1.414l-1.879 1.88h5.808a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftTwiceBulk;
