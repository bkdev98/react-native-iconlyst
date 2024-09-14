import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquareBroken = ({
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
      d="M16.717 21c2.949 0 4.783-2.081 4.783-5.026V8.026C21.5 5.081 19.666 3 16.718 3H8.283C5.343 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.335 21 8.283 21h4.467M11.248 17.13h2.506"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.065 9.672c0 1.909-.936 1.81-.936 3.366.13 1.558 1.472 1.663 4.372 1.663s4.243-.1 4.373-1.663c0-1.557-.936-1.457-.936-3.366 0-1.493-1.356-3.19-3.437-3.19-.86 0-1.597.29-2.165.737"
    />
  </Svg>
);
export default IconlystRingtoneSquareBroken;
