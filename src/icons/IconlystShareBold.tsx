import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShareBold = ({
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
      d="M16.26 8.095c.564.5 1.307.805 2.12.805 1.765 0 3.2-1.436 3.2-3.2s-1.435-3.2-3.2-3.2a3.204 3.204 0 0 0-3.13 3.867L9.7 9.604A3.2 3.2 0 0 0 7.582 8.8a3.204 3.204 0 0 0-3.2 3.2 3.203 3.203 0 0 0 3.2 3.199c.813 0 1.556-.304 2.12-.805l5.55 3.234A3.204 3.204 0 0 0 18.38 21.5c1.765 0 3.2-1.436 3.2-3.2s-1.435-3.2-3.2-3.2c-.811 0-1.553.304-2.118.803l-5.55-3.236a3.2 3.2 0 0 0-.001-1.336z"
    />
  </Svg>
);
export default IconlystShareBold;
