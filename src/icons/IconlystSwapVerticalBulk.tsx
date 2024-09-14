import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.903 19.221a1 1 0 0 1-1-1v-8.184H5.547a.999.999 0 0 1-.774-1.633l2.317-2.83c.357-.499 1.235-.512 1.607-.027l2.338 2.857a1.001 1.001 0 0 1-.774 1.633H8.903v8.184a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.096 19.22c-.335 0-.631-.165-.813-.417l-2.318-2.832a1.001 1.001 0 0 1 .774-1.633h1.357V6.154a1 1 0 0 1 2 0v8.184h1.358a1.001 1.001 0 0 1 .774 1.633l-2.338 2.857a1 1 0 0 1-.794.392"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwapVerticalBulk;
