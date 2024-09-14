import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight3Bulkcurved = ({
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
      d="M13.062 6.911c-.536.535-.721 2.347-.771 4.092l-.006 2c.053 2.237.313 3.607.777 4.071.564.563 1.504.274 2.26-.04 1.569-.65 6.105-3.397 6.105-5.042 0-1.695-4.738-4.432-6.177-5.029-.782-.325-1.653-.585-2.188-.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.29 11.004H4.073a1 1 0 1 0 0 2h8.211z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystArrowRight3Bulkcurved;
