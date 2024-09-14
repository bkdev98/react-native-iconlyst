import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageSearchBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.47 15.68c-1.37-.737-2.398.182-3.4 1.031a.3.3 0 0 0-.105.243c.07 1.095.381 2.05.892 2.83.096.147.3.167.43.05l3.37-3.023a.297.297 0 0 0-.043-.475 29 29 0 0 0-1.143-.656M16.645 3.027h-6.34c-.26 0-.404.315-.256.528.56.81.895 1.785.895 2.841a5 5 0 0 1-.407 1.984l.383.383a1.998 1.998 0 0 1-1.412 3.416c-.51 0-1.022-.195-1.412-.584l-.467-.466a5 5 0 0 1-1.748.33c-.893 0-1.728-.24-2.456-.65-.213-.12-.494.026-.494.27v3.167c0 .249.288.393.5.261.964-.6 2.232-.967 3.752-.147.689.372 1.287.735 1.737 1.02.114.072.262.06.363-.03l2.808-2.52a4.92 4.92 0 0 1 6.171-.292l3.193 2.319a.3.3 0 0 0 .476-.243V8.548c0-3.302-2.124-5.52-5.286-5.52"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.088 13.952-7.692 6.902c-.145.13-.13.36.038.458.783.454 1.72.705 2.776.705h8.436c2.933 0 4.95-1.922 5.229-4.835a.3.3 0 0 0-.122-.265l-4.371-3.165a3.425 3.425 0 0 0-4.294.2M5.882 4.085a2.315 2.315 0 0 1 2.313 2.312A2.316 2.316 0 0 1 5.882 8.71a2.316 2.316 0 0 1-2.313-2.313 2.315 2.315 0 0 1 2.313-2.312m0 6.125c.739 0 1.424-.22 2.008-.586l1.09 1.086a.75.75 0 0 0 1.058-1.061L8.984 8.598c.444-.623.71-1.38.71-2.201a3.816 3.816 0 0 0-3.812-3.812 3.816 3.816 0 0 0-3.813 3.812 3.817 3.817 0 0 0 3.813 3.813"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageSearchBold;
