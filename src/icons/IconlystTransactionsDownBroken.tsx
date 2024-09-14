import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownBroken = ({
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
      d="M8.059 10.654h2.723M8.059 7.22h7.298M14.285 11.606l2.677-.004.005 2.677"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.965 11.597-4.757 4.961-2.234-2.227-2.44 2.448"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.224 21c2.945 0 5.026-1.843 5.026-4.782V7.783C21.25 4.835 19.169 3 16.224 3H8.276C5.331 3 3.25 4.835 3.25 7.784v8.434C3.25 19.166 5.331 21 8.276 21h4.543"
    />
  </Svg>
);
export default IconlystTransactionsDownBroken;
