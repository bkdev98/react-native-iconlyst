import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSticker2Light = ({
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
      d="M15.85 20.158a2.43 2.43 0 0 1-1.744.736H7.783C4.844 20.894 3 18.837 3 15.926V8.073C3 5.16 4.835 3.105 7.783 3.105h8.434c2.95 0 4.783 2.056 4.783 4.968v5.823c0 .617-.241 1.211-.674 1.656z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.821v-3.374c-.001-1.646 1.348-2.983 3.014-2.986h3.233M14.356 9.207H7.923m3.997 4.717H7.922"
    />
  </Svg>
);
export default IconlystSticker2Light;
