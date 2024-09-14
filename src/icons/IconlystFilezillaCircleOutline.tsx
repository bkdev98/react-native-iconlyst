import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilezillaCircleOutline = ({
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
      d="M8.559 11.09a.75.75 0 0 1 .75-.75h5.915a.75.75 0 0 1 .575 1.23l-2.553 3.058q.265.039.525.11a2.9 2.9 0 0 0 1.61-.024.75.75 0 0 1 .437 1.435 4.4 4.4 0 0 1-2.44.036l.196-.724-.197.724a2.9 2.9 0 0 0-1.61.023.75.75 0 0 1-.793-1.198l2.646-3.17H9.31a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.48 7.73a.75.75 0 0 1 .72-.539h3.546a.75.75 0 0 1 0 1.5h-2.984L8.67 15.803a.75.75 0 1 1-1.44-.423z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilezillaCircleOutline;
