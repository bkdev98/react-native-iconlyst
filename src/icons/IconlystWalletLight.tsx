import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.342 12.002zM19.252 14.405v.817a4.7 4.7 0 0 1-4.704 4.695H7.703A4.7 4.7 0 0 1 3 15.222V8.79a4.703 4.703 0 0 1 4.703-4.704h6.845a4.704 4.704 0 0 1 4.704 4.704v.796"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.14 14.413h-4.164a1.86 1.86 0 0 1-1.86-1.861v-1.098a1.86 1.86 0 0 1 1.86-1.86h4.164a1.86 1.86 0 0 1 1.86 1.86v1.098a1.86 1.86 0 0 1-1.86 1.86"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletLight;
