import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodepenLight = ({
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
      d="M11.182 3.531a1.5 1.5 0 0 1 1.635 0l7.5 4.876a1.5 1.5 0 0 1 .682 1.257v4.672a1.5 1.5 0 0 1-.682 1.257l-7.5 4.875a1.5 1.5 0 0 1-1.636 0l-7.5-4.875A1.5 1.5 0 0 1 3 14.335v-4.67c0-.508.257-.981.682-1.258z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.001 20.71v-5.663M20.71 8.95l-8.711 6.097-8.71-6.098"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.29 15.047 8.711-6.098 8.71 6.098M12.001 3.29v5.662"
    />
  </Svg>
);
export default IconlystCodepenLight;
