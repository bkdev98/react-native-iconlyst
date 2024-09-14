import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftTriangleOutline = ({
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
      d="M11.882 6.606a.75.75 0 0 1 .388.656v3.989h7.729a.75.75 0 0 1 0 1.5h-7.73v3.986a.75.75 0 0 1-1.15.635L3.6 12.634a.75.75 0 0 1 0-1.269l7.52-4.737a.75.75 0 0 1 .763-.022M10.77 11.97v3.407L5.407 12 10.77 8.62z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftTriangleOutline;
