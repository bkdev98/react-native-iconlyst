import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlobeBold = ({
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
      d="M10.712 15.583a6.126 6.126 0 0 0 6.12-6.12 6.126 6.126 0 0 0-6.12-6.12 6.126 6.126 0 0 0-6.12 6.12 6.126 6.126 0 0 0 6.12 6.12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.473 16.228c3.727-3.728 3.727-9.794 0-13.521a.75.75 0 0 0-1.061 1.06c3.143 3.144 3.143 8.257 0 11.4a8 8 0 0 1-5.7 2.362 8 8 0 0 1-5.7-2.362.749.749 0 1 0-1.06 1.061 9.48 9.48 0 0 0 6.01 2.764v1.021H6.91a.75.75 0 0 0 0 1.5h7.624a.75.75 0 0 0 0-1.5h-3.073v-1.02a9.48 9.48 0 0 0 6.01-2.765"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlobeBold;
