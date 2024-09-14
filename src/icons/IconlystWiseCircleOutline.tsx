import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWiseCircleOutline = ({
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
      d="M9.049 7.532h6.898a.75.75 0 0 1 .69 1.041l-4.011 9.5a.75.75 0 1 1-1.382-.584l3.572-8.458h-4.297l.77 1.064a.75.75 0 0 1-.118 1.01l-1.09.934h1.518a.75.75 0 0 1 0 1.5H8.053a.75.75 0 0 1-.488-1.32l2.105-1.803L8.44 8.722a.75.75 0 0 1 .608-1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWiseCircleOutline;
