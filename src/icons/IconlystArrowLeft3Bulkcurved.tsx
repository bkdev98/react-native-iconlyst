import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeft3Bulkcurved = ({
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
      d="M11.439 6.912c.536.535.72 2.347.77 4.092l.007 2c-.053 2.237-.313 3.607-.777 4.07-.564.564-1.504.275-2.26-.04-1.57-.65-6.105-3.396-6.105-5.041 0-1.695 4.738-4.432 6.177-5.03.782-.324 1.653-.584 2.188-.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.21 11.004h8.217a1 1 0 1 1 0 2h-8.211z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystArrowLeft3Bulkcurved;
