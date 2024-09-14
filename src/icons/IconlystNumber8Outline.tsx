import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber8Outline = ({
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
      d="M12.5 5.133a2.963 2.963 0 1 0 0 5.927 2.963 2.963 0 0 0 0-5.927M8.036 8.096a4.463 4.463 0 1 1 8.927 0 4.463 4.463 0 0 1-8.927 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 12.559a3.536 3.536 0 1 0 0 7.072 3.536 3.536 0 0 0 0-7.072m-5.036 3.536a5.036 5.036 0 1 1 10.073 0 5.036 5.036 0 0 1-10.073 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNumber8Outline;
