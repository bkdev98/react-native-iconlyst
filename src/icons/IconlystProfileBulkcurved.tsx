import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileBulkcurved = ({
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
      d="M12.212 11.642h.03a4.89 4.89 0 0 0 4.887-4.887 4.89 4.89 0 0 0-4.887-4.886 4.89 4.89 0 0 0-4.887 4.884 4.88 4.88 0 0 0 4.856 4.89"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 13.83c-3.913 0-7.345 2.303-7.345 4.926 0 3.375 5.53 3.375 7.345 3.375 1.816 0 7.344 0 7.344-3.397 0-2.612-3.432-4.903-7.344-4.903"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystProfileBulkcurved;
