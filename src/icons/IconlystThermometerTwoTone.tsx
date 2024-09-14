import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.88 18.277-1.893.225a2.1 2.1 0 0 0-1.236.6l-1.29 1.289A2.08 2.08 0 1 1 4.52 17.45l1.29-1.29c.333-.333.545-.768.6-1.236l.225-1.894c.055-.467.266-.903.6-1.236l7.575-7.575a4.16 4.16 0 1 1 5.883 5.883l-7.575 7.575a2.1 2.1 0 0 1-1.237.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.773 14.188 1.917 1.917M15.223 11.734l1.917 1.917M17.703 9.32l1.887 1.886"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThermometerTwoTone;
