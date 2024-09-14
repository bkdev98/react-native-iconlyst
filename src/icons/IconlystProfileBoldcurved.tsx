import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileBoldcurved = ({
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
      d="M12.25 13.83c-3.912 0-7.344 2.303-7.344 4.926 0 3.375 5.529 3.375 7.345 3.375s7.344 0 7.344-3.397c0-2.612-3.432-4.903-7.344-4.903M12.212 11.642h.031a4.89 4.89 0 0 0 4.887-4.887 4.89 4.89 0 0 0-4.887-4.886 4.89 4.89 0 0 0-4.887 4.884 4.88 4.88 0 0 0 4.856 4.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProfileBoldcurved;
