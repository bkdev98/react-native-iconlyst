import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAddFundsTwoTone = ({
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
      d="M15.867 12.002h-.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.752 14.405v.817a4.7 4.7 0 0 1-4.704 4.695H8.203A4.7 4.7 0 0 1 3.5 15.222V8.79a4.703 4.703 0 0 1 4.703-4.704h6.845a4.704 4.704 0 0 1 4.704 4.704v.796"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.64 14.413h-4.164a1.86 1.86 0 0 1-1.86-1.861v-1.098a1.86 1.86 0 0 1 1.86-1.86h4.164a1.86 1.86 0 0 1 1.86 1.86v1.098a1.86 1.86 0 0 1-1.86 1.86"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.476 12.002H6.822M8.647 13.826v-3.654"
    />
  </Svg>
);
export default IconlystWalletAddFundsTwoTone;
