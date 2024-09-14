import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareTitleBroken = ({
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
      d="M21 10.136v-2.11C21 5.081 19.165 3 16.217 3H7.782C4.842 3 3 5.081 3 8.026M10.378 21H7.782C4.834 21 3 18.919 3 15.974V12M16.018 12a3.6 3.6 0 1 1-2.606 1.116m5.055 5.12 1.974 1.97M7.56 8.339h3.116"
    />
  </Svg>
);
export default IconlystSearchSquareTitleBroken;
