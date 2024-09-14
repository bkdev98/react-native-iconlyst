import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown2Boldcurved = ({
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
      d="M12.25 16.5c-3.266 0-7.121-6.24-7.86-7.49A.998.998 0 1 1 6.11 7.99c1.555 2.625 4.58 6.51 6.14 6.51 1.562 0 4.587-3.885 6.14-6.51a.999.999 0 1 1 1.72 1.018c-.74 1.251-4.594 7.491-7.86 7.491"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDown2Boldcurved;
