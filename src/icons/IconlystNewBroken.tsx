import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewBroken = ({
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
      d="M12 4.176H6.067C3.567 4.176 2 5.946 2 8.449v7.104c0 2.504 1.56 4.274 4.067 4.274h11.865c2.508 0 4.068-1.77 4.068-4.274V8.45c0-2.503-1.56-4.273-4.067-4.273h-2.647"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.617 12h1.692m.426-2.129h-2.118v4.257h2.118M14.785 9.91l.76 4.212 1.447-3.053 1.447 3.053.76-4.212M5.148 14.293v-4.34l3.195 4.214M8.343 11.132v-1.3"
    />
  </Svg>
);
export default IconlystNewBroken;
