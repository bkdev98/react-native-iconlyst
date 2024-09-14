import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchPlusOutline = ({
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
      d="M11.378 3.75a7.35 7.35 0 1 0 0 14.7 7.35 7.35 0 1 0 0-14.7m-8.85 7.35a8.85 8.85 0 0 1 8.85-8.85 8.85 8.85 0 0 1 8.85 8.85 8.85 8.85 0 0 1-8.85 8.85 8.85 8.85 0 0 1-8.85-8.85m8.84-2.91a.75.75 0 0 1 .75.75v1.4h1.4a.75.75 0 1 1 0 1.5h-1.4v1.4a.75.75 0 0 1-1.5 0v-1.4h-1.4a.75.75 0 0 1 0-1.5h1.4v-1.4a.75.75 0 0 1 .75-.75m8.338 10.53a.765.765 0 1 0 0 1.53.765.765 0 0 0 0-1.53m-2.265.765a2.265 2.265 0 1 1 4.53 0 2.265 2.265 0 0 1-4.53 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchPlusOutline;
