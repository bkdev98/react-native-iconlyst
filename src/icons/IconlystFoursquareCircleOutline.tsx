import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoursquareCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.959 8.295c0-.99.802-1.791 1.791-1.791h5.727c.792 0 1.39.717 1.25 1.495l-.924 5.14a1.79 1.79 0 0 1-1.763 1.475h-1.668L9.95 17.61a1 1 0 0 1-.053.059c-.715.715-1.938.209-1.938-.803zm1.791-.291a.29.29 0 0 0-.291.291v7.537l1.971-2.44a.75.75 0 0 1 .584-.278h2.025a.29.29 0 0 0 .288-.24l.875-4.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.604 10.378a.75.75 0 0 1 .75-.75h3.123a.75.75 0 0 1 0 1.5h-3.123a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFoursquareCircleOutline;
