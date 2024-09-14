import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapLeftHandBold = ({
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
      d="m11.64 6.156-.042 2.707A3.2 3.2 0 0 1 10.36 6.34c0-1.73 1.324-3.14 2.95-3.14s2.95 1.41 2.95 3.14a3.18 3.18 0 0 1-1.286 2.558V6.181a1.667 1.667 0 0 0-3.334-.025m6.681 7.193a1.82 1.82 0 0 0-2.153.667l-1.194 1.73v-5.233c.055.013.105.042.161.042a.8.8 0 0 0 .4-.108c1.419-.836 2.301-2.41 2.301-4.107 0-2.6-2.03-4.715-4.526-4.715S8.784 3.741 8.784 6.34c0 1.665.857 3.223 2.237 4.067a.8.8 0 0 0 .246.09c-2.314.19-5.446.184-6.35 2.623-.949 2.562-.015 5.955 1.65 7.619 2.122 2.123 8.056 2.284 9.999-.132 1.232-1.532 2.19-3.393 2.794-5.06.324-.895-.15-1.858-1.039-2.198"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapLeftHandBold;
