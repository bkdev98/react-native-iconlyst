import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseModernBold = ({
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
      d="M19.195 9.258c0-3.4-2.659-6.224-6.114-6.717a.29.29 0 0 0-.329.291v6.87a.75.75 0 0 1-1.5 0v-6.87a.29.29 0 0 0-.328-.292 7.3 7.3 0 0 0-4 1.904C5.555 5.728 4.803 7.44 4.803 9.26l.002 5.41c0 3.745 3.228 6.793 7.195 6.793 1.917 0 3.72-.703 5.077-1.98 1.367-1.285 2.118-2.996 2.118-4.817z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseModernBold;
