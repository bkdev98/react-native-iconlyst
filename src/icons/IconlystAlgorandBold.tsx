import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlgorandBold = ({
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
      d="M15.613 16.65a.75.75 0 0 1-.937-.496l-.97-3.138-2.027 3.31a.747.747 0 0 1-1.031.248.75.75 0 0 1-.248-1.031l2.717-4.436-.549-1.776-4.288 6.995a.75.75 0 1 1-1.279-.783l5.155-8.411a.75.75 0 0 1 1.356.171l.649 2.1.338-.551a.75.75 0 1 1 1.279.783l-1.027 1.677 1.358 4.402a.75.75 0 0 1-.497.937m.604-14.145H7.781c-3.159 0-5.282 2.222-5.282 5.53v7.939c0 3.308 2.123 5.53 5.282 5.53h8.435c3.16 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.285-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlgorandBold;
