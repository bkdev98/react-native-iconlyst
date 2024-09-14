import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.311 10.072a7.572 7.572 0 1 1 8.298 7.538v-3.428l2.076-1.733a.75.75 0 0 0-.962-1.152l-1.093.913a.8.8 0 0 0-.02-.231V8.83a.75.75 0 0 0-1.5 0v1.71l-1.067-.891a.75.75 0 1 0-.961 1.151l2.027 1.694v5.111a7.573 7.573 0 0 1-6.798-7.533m6.798 7.534V21a.75.75 0 0 0 1.5 0v-3.39a7.7 7.7 0 0 1-1.5-.005"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeBold;
