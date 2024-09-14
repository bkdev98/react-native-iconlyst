import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.877 6.5v11M19.123 6.5v11M12.5 21c3.657 0 6.622-1.566 6.622-3.5 0-1.932-2.965-3.499-6.622-3.499s-6.623 1.567-6.623 3.5c0 1.316 1.376 2.463 3.409 3.06M12.5 3C8.842 3 5.877 4.567 5.877 6.5S8.842 10 12.5 10c3.657 0 6.622-1.567 6.622-3.5 0-1.403-1.56-2.612-3.814-3.17"
    />
  </Svg>
);
export default IconlystCylindricalBroken;
