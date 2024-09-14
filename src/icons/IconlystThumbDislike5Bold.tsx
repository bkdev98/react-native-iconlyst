import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike5Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.442 14.432h2.016c.347 0 .581.393.468.72-.69 1.997-.887 6.082 2.46 6.148a.4.4 0 0 0 .157-.029c.504-.205.63-.46.736-.958.674-3.041 2.145-4.718 3.483-5.38.074-.037.093-.128.056-.202-.421-.776-.421-1.531-.421-2.785V5.787c0-.572 0-1.042.042-1.458a.47.47 0 0 0-.265-.481c-.938-.42-1.917-.78-2.895-.78h-4.95c-2.851 0-4.827 1.854-4.827 4.917 0 3.206-.233 6.447 3.94 6.447M18.227 14.798c.349.16 1.513.192 2.556.198a.714.714 0 0 0 .717-.714V3.415a.713.713 0 0 0-.717-.715c-1.043.006-2.207.037-2.556.199-.411.188-.744.488-.944.865-.222.4-.222.933-.222 1.987v6.195c0 1.054 0 1.587.222 1.986.2.378.533.677.944.866"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislike5Bold;
