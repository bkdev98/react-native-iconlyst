import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoFilterTwoTone = ({
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
      d="M5.567 4.162a2.63 2.63 0 0 0-1.772 2.506v2.03c0 .99.396 1.94 1.089 2.643l4.337 3.853c.288.287.446.673.446 1.08v3.198c0 1.08 1.09 1.822 2.089 1.416l1.862-.743c.585-.228.971-.792.971-1.416v-1.97c0-.436.178-.842.495-1.13l.98-.97M4.41 3l13.3 13.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.063 4.002h7.486a2.657 2.657 0 0 1 2.654 2.664v1.346c0 1.06-.446 2.07-1.228 2.783l-1.07 1.05"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNoFilterTwoTone;
