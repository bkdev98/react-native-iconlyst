import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnBackBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.618 15.324a2.71 2.71 0 0 1 2.707 2.706 2.71 2.71 0 0 1-2.707 2.706 2.71 2.71 0 0 1-2.706-2.706 2.71 2.71 0 0 1 2.706-2.706"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m4.786 6.23 3.091-2.274a.999.999 0 0 1 1.593.805V9.31a1.001 1.001 0 0 1-1.593.806L4.787 7.84a.998.998 0 0 1 0-1.611"
    />
    <Path
      fill={props.color}
      d="M12.636 6.035H9.47v2h3.165a4.99 4.99 0 0 1 4.986 4.986 4.99 4.99 0 0 1-4.985 4.987 1 1 0 1 0 0 2c3.85 0 6.985-3.134 6.985-6.987 0-3.852-3.134-6.986-6.985-6.986"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTurnBackBulk;
