import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard6Bold = ({
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
      d="M9.845 11.129c-.929 0-1.029.783-1.029 1.12v2.958c0 .337.1 1.12 1.03 1.12h6.27c.927 0 1.027-.783 1.027-1.12v-2.958c0-.337-.1-1.12-1.027-1.12z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.197 21.5H8.762c-3.159 0-5.282-2.221-5.282-5.526V8.026C3.48 4.721 5.603 2.5 8.762 2.5h8.436c3.16 0 5.282 2.221 5.282 5.526v7.948c0 3.305-2.123 5.526-5.283 5.526m.18-13.826H8.585a.75.75 0 0 1 0-1.5h8.794a.75.75 0 0 1 0 1.5m-1.261 10.153h-6.27c-1.49 0-2.53-1.077-2.53-2.62v-2.958c0-1.542 1.04-2.62 2.53-2.62h6.27c1.488 0 2.528 1.078 2.528 2.62v2.958c0 1.543-1.04 2.62-2.528 2.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard6Bold;
