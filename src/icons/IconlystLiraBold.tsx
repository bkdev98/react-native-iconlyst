import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraBold = ({
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
      d="M17.097 17.063h-2.248a3.75 3.75 0 0 1-3.743-3.62h2.488a1 1 0 1 0 0-2h-2.501v-1.19h2.5a1 1 0 1 0 0-2h-2.5v-2.19a1 1 0 1 0-2 0v2.19h-2.19a1 1 0 1 0 0 2h2.19v1.19h-2.19a1 1 0 1 0 0 2H9.1a5.756 5.756 0 0 0 5.749 5.62h2.248a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLiraBold;
