import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyTwoTone = ({
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
      d="M8.282 3.283h8.435c2.948 0 4.783 2.081 4.783 5.027v7.947c0 2.945-1.835 5.026-4.784 5.026H8.282c-2.948 0-4.782-2.08-4.782-5.026V8.31c0-2.946 1.843-5.027 4.782-5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.221 12.28A1.801 1.801 0 1 1 9.42 10.48h.004a1.8 1.8 0 0 1 1.798 1.802"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.229 12.283h6.147v1.802M14.625 14.085v-1.802"
    />
  </Svg>
);
export default IconlystKeyTwoTone;
