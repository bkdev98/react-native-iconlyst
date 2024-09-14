import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBoldsharp = ({
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
      d="M4.002 10.582c0-3.881 3.158-7.038 7.04-7.038 3.88 0 7.037 3.157 7.037 7.038 0 3.88-3.158 7.038-7.038 7.038s-7.039-3.158-7.039-7.039M22.497 21.04l-4.599-4.588a9 9 0 0 0 2.181-5.871c0-4.983-4.055-9.038-9.038-9.038s-9.039 4.055-9.039 9.038 4.055 9.039 9.04 9.039a8.97 8.97 0 0 0 5.391-1.803l4.652 4.638z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBoldsharp;
