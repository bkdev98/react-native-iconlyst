import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchNotFoundBold = ({
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
      d="M13.474 9.348a.751.751 0 0 1-.02-1.5h.02a.749.749 0 1 1 0 1.5m.35 4.84c-.29.3-.77.3-1.06 0-.94-.93-2.46-.93-3.4.01-.15.14-.34.21-.53.21s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.52-1.51 4-1.52 5.52 0 .29.3.29.77 0 1.06m-5.16-6.34h.01a.749.749 0 1 1 0 1.5.749.749 0 1 1-.01-1.5m2.47-5.35a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchNotFoundBold;
