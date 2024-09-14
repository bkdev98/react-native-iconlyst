import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeBridgeCircleOutline = ({
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
      d="M14.501 9.688a.75.75 0 0 1 .75.75v4.845a.75.75 0 0 1-1.5 0v-4.845a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.751 13.504c0-1.944 1.272-3.746 3.267-3.746a.75.75 0 1 1 0 1.5c-.914 0-1.767.853-1.767 2.246a.75.75 0 0 1-1.5 0M7.9 7.86h1.723A2.446 2.446 0 0 1 11.386 12a2.445 2.445 0 0 1-1.763 4.143H7.898c-.6 0-1.09-.485-1.09-1.088V8.942A1.09 1.09 0 0 1 7.9 7.86m1.723 3.391a.946.946 0 1 0 0-1.892H8.31v1.892zm-1.314 1.5h1.314a.946.946 0 0 1 0 1.894H8.31zM7.894 9.36h.004z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeBridgeCircleOutline;
