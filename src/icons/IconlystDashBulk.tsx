import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.761 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.918 15.73a3.735 3.735 0 0 0 3.656-3.016 3.71 3.71 0 0 0-.779-3.085 3.71 3.71 0 0 0-2.877-1.36h-2.221a.75.75 0 0 0 0 1.5h2.221c.668 0 1.295.297 1.719.813a2.22 2.22 0 0 1 .464 1.845 2.23 2.23 0 0 1-2.183 1.803H9.717a.75.75 0 0 0 0 1.5z"
    />
    <Path
      fill={props.color}
      d="M9.105 11.25a.75.75 0 0 0 0 1.5h2.046a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystDashBulk;
