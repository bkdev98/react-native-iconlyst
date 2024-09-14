import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSearchExploreBulk = ({
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
      d="M18.052 10.068c.844 0 1.642.192 2.355.534a.31.31 0 0 0 .374-.076l.106-.125a1.96 1.96 0 0 0-.125-2.645c-5.167-5.113-12.669-5.115-17.837 0a1.965 1.965 0 0 0-.129 2.645l7.563 8.988a1.938 1.938 0 0 0 2.969 0l.164-.196a.53.53 0 0 0 .022-.639 5.4 5.4 0 0 1-.921-3.027 5.46 5.46 0 0 1 5.459-5.46"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.135 16.66c-.65.65-1.78.65-2.431 0a1.72 1.72 0 0 1 0-2.43 1.71 1.71 0 0 1 1.215-.503c.44 0 .88.168 1.216.502.67.67.67 1.76 0 2.43m2.397 1.337-.87-.87a3.225 3.225 0 0 0-.466-3.958 3.224 3.224 0 0 0-4.552 0 3.225 3.225 0 0 0 0 4.552c1.034 1.035 2.743 1.218 3.96.468l.868.869a.747.747 0 0 0 1.06.001.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessSearchExploreBulk;
