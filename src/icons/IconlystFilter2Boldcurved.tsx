import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Boldcurved = ({
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
      d="M19.273 3.509c-1.495-.405-3.699-.403-6.755-.404h-.539c-3.047-.011-5.259-.001-6.753.404-1.689.458-2.476 1.474-2.476 3.196 0 2.138 1.927 3.776 3.79 5.36 1.642 1.394 3.193 2.713 3.193 4.138 0 3.426 0 5.902 2.52 5.902 2.514 0 2.514-2.476 2.514-5.902 0-1.425 1.55-2.744 3.193-4.138 1.863-1.584 3.79-3.222 3.79-5.36 0-1.722-.788-2.738-2.477-3.196"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilter2Boldcurved;
