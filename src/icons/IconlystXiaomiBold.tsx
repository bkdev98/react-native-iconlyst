import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXiaomiBold = ({
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
      d="M16.91 15.279a.75.75 0 0 1-1.5 0v-5.54a.75.75 0 0 1 1.5 0zm-2.772 0a.75.75 0 0 1-1.5 0v-3.69c0-.606-.494-1.1-1.099-1.1H8.592v4.79a.75.75 0 0 1-1.5 0v-5.54a.75.75 0 0 1 .75-.75h3.697a2.603 2.603 0 0 1 2.599 2.6zm-2.775 0a.75.75 0 0 1-1.5 0v-2.77a.75.75 0 0 1 1.5 0zm4.854-12.27H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXiaomiBold;
