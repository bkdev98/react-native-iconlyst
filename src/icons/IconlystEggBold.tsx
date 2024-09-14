import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggBold = ({
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
      d="M20.799 14.03c.035 3.993-3.367 7.658-7.738 7.956-4.349.296-8.25-2.875-8.786-7.163-.265-2.108.218-4.107 1.002-6.043.85-2.097 1.998-4.002 3.793-5.437 2.269-1.813 4.661-1.8 6.91.047 2.044 1.677 3.253 3.913 4.1 6.369.434 1.258.69 2.556.719 4.271m-11.385.16a3.086 3.086 0 1 1 6.171-.001 3.086 3.086 0 0 1-6.17.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEggBold;
