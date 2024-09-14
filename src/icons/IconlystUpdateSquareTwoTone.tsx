import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdateSquareTwoTone = ({
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
      d="M3.5 16.468V8.033c0-2.948 2.081-4.783 5.026-4.783h7.948c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.948-2.081 4.782-5.026 4.782H8.526c-2.945 0-5.026-1.844-5.026-4.782"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.916 14.09 1.073-1.828 1.818 1.067M18.082 10.414l-1.073 1.828-1.818-1.067"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.947 12.156a4.45 4.45 0 0 0-8.111-2.432M8.05 12.348a4.45 4.45 0 0 0 8.111 2.431"
    />
  </Svg>
);
export default IconlystUpdateSquareTwoTone;
