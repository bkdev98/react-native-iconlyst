import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M16.303 2.75H7.65c-3.012 0-4.901 2.134-4.901 5.154v8.146c0 3.02 1.88 5.154 4.9 5.154h8.648c3.025 0 4.905-2.134 4.905-5.154V7.904c.004-3.02-1.877-5.154-4.9-5.154" />
      <Path
        d="M10.703 8.785a1.845 1.845 0 1 1-3.69.001 1.845 1.845 0 0 1 3.69-.001M21.207 14.951c-.923-.95-2.698-2.869-4.628-2.869s-3.044 4.233-4.901 4.233-3.544-1.914-5.032-.687-2.896 3.733-2.896 3.733"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystImage2TwoTone;
