import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagOutline = ({
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
      d="M5.375 9.375a.75.75 0 0 1 .75-.75h12.25a.75.75 0 0 1 0 1.5H6.125a.75.75 0 0 1-.75-.75m0 5.25a.75.75 0 0 1 .75-.75h12.25a.75.75 0 0 1 0 1.5H6.125a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.46 4.256a.75.75 0 0 1 .651.837l-1.75 14a.75.75 0 0 1-1.488-.186l1.75-14a.75.75 0 0 1 .837-.651m5.515 0a.75.75 0 0 1 .652.837l-1.75 14a.75.75 0 0 1-1.489-.186l1.75-14a.75.75 0 0 1 .837-.651"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHashtagOutline;
