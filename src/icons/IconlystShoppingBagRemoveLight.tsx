import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagRemoveLight = ({
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
      d="M21.455 12.058V8.003c0-2.945-1.835-5.026-4.783-5.026H8.237c-2.94 0-4.782 2.08-4.782 5.026v7.947c0 2.945 1.833 5.027 4.782 5.027h4.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.034 8.797a3.58 3.58 0 1 1-7.159 0M17.072 18.299h4.382"
    />
  </Svg>
);
export default IconlystShoppingBagRemoveLight;
