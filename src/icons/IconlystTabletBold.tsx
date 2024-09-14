import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTabletBold = ({
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
      d="M12 18.15a.963.963 0 0 1-.95-.95c0-.515.435-.95.95-.95s.95.435.95.95-.435.95-.95.95M17 2.5H7a4.103 4.103 0 0 0-4.1 4.099V17.4c0 2.261 1.839 4.1 4.1 4.1h10c2.261 0 4.1-1.839 4.1-4.1V6.599A4.103 4.103 0 0 0 17 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTabletBold;
