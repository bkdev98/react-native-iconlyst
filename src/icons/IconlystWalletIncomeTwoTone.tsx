import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletIncomeTwoTone = ({
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
      d="M21.498 14.36h-3.807a2.53 2.53 0 0 1 0-5.063h3.807"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.497 11.772h-.003M3.5 11.565V8.577A4.936 4.936 0 0 1 8.436 3.64h8.128A4.936 4.936 0 0 1 21.5 8.577v6.749a4.936 4.936 0 0 1-4.936 4.936h-3.426"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.94 13.758v6.6m0-6.6 2.65 2.662m-2.65-2.662L5.287 16.42"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWalletIncomeTwoTone;
