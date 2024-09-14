import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareTitleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.781 9.858c1.024 0 1.998.213 2.886.592.206.088.442-.058.442-.282v-2.5c0-3.367-2.161-5.63-5.378-5.63H7.128c-3.217 0-5.378 2.263-5.378 5.63v8.099c0 3.368 2.161 5.63 5.379 5.63h3.929c.24 0 .385-.27.267-.478a7.36 7.36 0 0 1-.961-3.645c0-4.09 3.327-7.416 7.417-7.416"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.497 19.549a2.51 2.51 0 0 1-2.51-2.51 2.51 2.51 0 0 1 2.51-2.508 2.51 2.51 0 0 1 2.509 2.509 2.51 2.51 0 0 1-2.51 2.509m4.533 1.133-1.29-1.287a4 4 0 0 0 .766-2.355 4.014 4.014 0 0 0-4.01-4.01 4.014 4.014 0 0 0-4.008 4.01 4.014 4.014 0 0 0 4.009 4.009 4 4 0 0 0 2.15-.626l1.324 1.32a.747.747 0 0 0 1.06 0 .75.75 0 0 0-.001-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.502 8.727H6.387a.75.75 0 0 1 0-1.5h3.115a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystSearchSquareTitleBulk;
