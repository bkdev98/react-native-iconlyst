import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreSquareBoldsharp = ({
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
      d="M16.949 13.298h-1.5l-.009-1.5h1.509zm-4.01 0h-1.5l-.009-1.5h1.509zm-4.009 0h-1.5l-.009-1.5H8.93zM2.5 22.285H22v-19.5H2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoreSquareBoldsharp;
