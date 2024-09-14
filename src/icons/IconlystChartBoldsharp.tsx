import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.337 17.742h1.5v-4.343h-1.5zm-4.836 0h1.5V7.327h-1.5zm-4.837 0h1.5v-7.53h-1.5zM2.5 22.285H22v-19.5H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartBoldsharp;
