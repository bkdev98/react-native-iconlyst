import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinanceBnbBold = ({
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
      d="M17.372 12.584a.75.75 0 0 1-1.04-.208.755.755 0 0 1 .204-1.045.744.744 0 0 1 1.037.203l.007.01a.75.75 0 0 1-.208 1.04M15.53 10.53a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22L12 8.061 9.53 10.53a.749.749 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06m-3.994.801a.744.744 0 0 1 1.037.203l.007.01a.75.75 0 1 1-1.248.832.755.755 0 0 1 .204-1.045m3.994 3.199-3 3a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-3-3a.749.749 0 1 1 1.06-1.06L12 15.939l2.47-2.469a.749.749 0 1 1 1.06 1.06m-8.054-1.871a.745.745 0 0 1-1.041-.179l-.006-.01a.749.749 0 1 1 1.228-.86.755.755 0 0 1-.181 1.049M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBinanceBnbBold;
