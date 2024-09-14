import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletTransferBroken = ({
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
      d="M21.25 14.242h-3.547a2.359 2.359 0 0 1 0-4.717h1.005M17.535 11.83h-.003"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.336 19.743h2.316c2.539 0 4.598-2.06 4.598-4.598V8.856a4.6 4.6 0 0 0-4.598-4.598h-.825M4.48 9.887v-1.03c0-2.54 2.06-4.6 4.599-4.6h3.786M9.613 19.635v-5.554M11.347 17.966l-1.733 1.672-1.733-1.672M4.984 14.081v5.554M3.25 15.753l1.733-1.672 1.733 1.672"
    />
  </Svg>
);
export default IconlystWalletTransferBroken;
