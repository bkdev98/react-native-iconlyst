import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpsideDownOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M9.027 15.95A.975.975 0 1 1 9.025 14a.975.975 0 0 1 .002 1.95M15.527 15.95a.975.975 0 1 1-.002-1.95.975.975 0 0 1 .002 1.95M9.369 10.463a.75.75 0 0 1-.6-1.207 4.29 4.29 0 0 1 6.95 0 .75.75 0 1 1-1.19.913 2.79 2.79 0 0 0-4.57 0 .75.75 0 0 1-.59.293"
    />
  </Svg>
);
export default IconlystUpsideDownOutline;
