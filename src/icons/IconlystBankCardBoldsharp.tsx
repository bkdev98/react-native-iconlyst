import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardBoldsharp = ({
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
      d="M14.352 16.23h4.975v-1.5h-4.975zm-4.226 0h2.248v-1.5h-2.248zM2.5 19.67H22v-8.997H2.5zM2.5 9.172H22V4.609H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardBoldsharp;
