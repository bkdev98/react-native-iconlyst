import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSticker2TwoTone = ({
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
      d="M16.35 20.158a2.43 2.43 0 0 1-1.744.736H8.283c-2.939 0-4.783-2.057-4.783-4.968V8.073c0-2.912 1.835-4.968 4.783-4.968h8.434c2.95 0 4.783 2.056 4.783 4.968v5.823c0 .617-.241 1.211-.674 1.656z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.821v-3.374c-.001-1.646 1.348-2.983 3.014-2.986h3.233M14.856 9.207H8.423m3.997 4.717H8.422"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSticker2TwoTone;
