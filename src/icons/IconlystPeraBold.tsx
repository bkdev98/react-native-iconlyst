import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeraBold = ({
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
      d="M7.028 2.25a.75.75 0 0 1 .734.764v.029q0 .04.004.118c.006.106.019.257.048.434.04.241.105.509.21.764 1.16-.42 3.54-.76 5.387 2.433.64 1.114 1.673 1.633 2.73 2.164q.108.053.215.108c2.752 1.392 4.24 4.566 3.571 7.568-.407 1.995-1.647 3.45-3.217 4.294-1.516.938-3.396 1.284-5.327.64-2.935-.922-4.94-3.798-4.77-6.878l.015-.24c.069-1.181.136-2.336-.509-3.446-1.849-3.21-.344-5.104.598-5.892a4.9 4.9 0 0 1-.383-1.272 5.6 5.6 0 0 1-.072-.828v-.025l.75.015-.75-.016a.75.75 0 0 1 .766-.734m5.014 10.667a2.576 2.576 0 1 1 2.577 4.462 2.576 2.576 0 0 1-2.577-4.462"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeraBold;
