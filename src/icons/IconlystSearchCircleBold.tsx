import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleBold = ({
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
      d="M14.193 11.62a2.494 2.494 0 0 0-4.986 0 2.494 2.494 0 0 0 4.986 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.068 16.15a.75.75 0 0 1-1.061 0l-1.171-1.171a3.96 3.96 0 0 1-2.136.631 3.996 3.996 0 0 1-3.993-3.99c0-2.2 1.791-3.991 3.993-3.991a3.997 3.997 0 0 1 3.993 3.991c0 .872-.289 1.672-.766 2.33l1.141 1.139a.75.75 0 0 1 0 1.061M12 2.5c-5.239 0-9.5 4.261-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCircleBold;
