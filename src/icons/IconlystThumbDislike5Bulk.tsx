import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike5Bulk = ({
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
      d="M18.726 14.797c.35.16 1.514.192 2.557.199A.714.714 0 0 0 22 14.28V3.414a.713.713 0 0 0-.717-.715c-1.043.006-2.207.037-2.557.199-.41.189-.743.488-.943.865-.222.4-.222.933-.222 1.987v6.195c0 1.054 0 1.587.222 1.986.2.378.533.677.943.866"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.942 14.433h2.016c.347 0 .581.393.468.72-.69 1.998-.887 6.083 2.46 6.149a.4.4 0 0 0 .157-.029c.504-.205.63-.46.736-.958.674-3.042 2.145-4.719 3.483-5.38.074-.037.093-.129.056-.202-.421-.777-.421-1.531-.421-2.785V5.789c0-.572 0-1.042.042-1.459a.47.47 0 0 0-.265-.48c-.938-.42-1.917-.78-2.895-.78h-4.95c-2.851 0-4.827 1.853-4.827 4.916 0 3.207-.233 6.447 3.94 6.447"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbDislike5Bulk;
