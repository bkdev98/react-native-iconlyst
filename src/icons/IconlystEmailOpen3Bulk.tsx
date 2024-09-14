import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen3Bulk = ({
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
      d="m19.9 7.55-6-4.2c-1.1-.8-2.7-.8-3.8 0l-6 4.2c-1 .7-1.6 1.8-1.6 3v5.7c0 1.5.5 2.7 1.4 3.6s2.2 1.4 3.8 1.4h8.6c1.6 0 2.9-.5 3.8-1.4s1.4-2.1 1.4-3.6v-5.7c0-1.2-.6-2.3-1.6-3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.687 14.866.023-.016 5.3-4.3c.04-.63-.13-1.13-.52-1.5l-2.01 1.61c-.4-1.33-1.55-2.16-3.17-2.16H9.69c-1.63 0-2.78.83-3.17 2.17L4.51 9.05c-.46.32-.63.82-.52 1.5l5.3 4.3.023.016c.026.018.056.039.087.054.76.63 1.61.91 2.55.92.01.01.02.01.04.01h.02c.01 0 .03 0 .04-.01.94-.01 1.79-.29 2.55-.92a1 1 0 0 0 .087-.054"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpen3Bulk;
