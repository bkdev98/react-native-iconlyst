import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxCheckBroken = ({
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
      d="M17.018 3.147c2.948 0 4.783 2.088 4.783 5.043v7.975c0 2.955-1.835 5.043-4.784 5.043H8.583c-2.948 0-4.782-2.088-4.782-5.043V8.19c0-2.955 1.843-5.043 4.782-5.043h4.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.793 13.326H17.51c-.887 0-1.697.504-2.09 1.301a2.92 2.92 0 0 1-2.62 1.63 2.92 2.92 0 0 1-2.62-1.63 2.33 2.33 0 0 0-2.09-1.3H6.715M10.623 8.842l1.597 1.605 3.29-3.302"
    />
  </Svg>
);
export default IconlystInboxCheckBroken;
