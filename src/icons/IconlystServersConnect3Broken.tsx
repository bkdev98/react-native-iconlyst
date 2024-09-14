import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect3Broken = ({
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
      d="M7.618 5.959h.01M7.618 11.785h.01M10.06 5.959h.01M10.06 11.785h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.602 19.398a1.603 1.603 0 1 1-3.206 0 1.603 1.603 0 0 1 3.206 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.224 19.4h-4.623m-3.208 0h-4.62M11.998 17.79v-3.048M13.184 3.146h-6.09a2.88 2.88 0 0 0 0 5.76h9.808a2.88 2.88 0 0 0 0-5.76h-.495M19.782 11.786a2.88 2.88 0 0 1-2.88 2.88H7.094a2.88 2.88 0 0 1 0-5.76h6.09"
    />
  </Svg>
);
export default IconlystServersConnect3Broken;
