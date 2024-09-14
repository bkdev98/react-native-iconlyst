import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownSquareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 16.337V7.902c0-2.948-2.081-4.783-5.026-4.783H8.526C5.581 3.12 3.5 4.954 3.5 7.903v8.434c0 2.948 2.081 4.782 5.026 4.782h7.948c2.945 0 5.026-1.843 5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.309 10.773h2.723M8.309 7.34h7.298M14.535 11.725l2.677-.004.005 2.677"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.215 11.716-4.757 4.961-2.234-2.227-2.44 2.448"
    />
  </Svg>
);
export default IconlystTransactionsDownSquareTwoTone;
