import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStethoscopeBold = ({
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
      d="M18.193 13.49c.516 0 .935.417.935.93 0 .518-.419.94-.935.94a.94.94 0 0 1-.935-.94c0-.513.42-.93.935-.93m-8.9 1.028c.173 0 .345-.026.518-.04a.7.7 0 0 1-.516.232.7.7 0 0 1-.516-.232c.171.014.341.04.514.04m11.835-.098a2.936 2.936 0 0 0-5.87 0c0 1.246.781 2.307 1.876 2.734A3.45 3.45 0 0 1 13.745 20a3.454 3.454 0 0 1-3.45-3.45v-.036A2.7 2.7 0 0 0 12 14.01v-.092a6.3 6.3 0 0 0 1.842-1.282 6.405 6.405 0 0 0 .836-8.003c.078-.211.126-.436.126-.673a1.963 1.963 0 0 0-3.925 0c0 1.086.88 1.969 1.962 1.969.098 0 .191-.015.285-.028a4.414 4.414 0 0 1-.7 5.323 4.2 4.2 0 0 1-1.729 1.063q-.037.013-.074.029l-.022.008-.023.01a4.54 4.54 0 0 1-2.598-.015l-.007-.002c-.023-.007-.047-.009-.069-.016a4.4 4.4 0 0 1-1.742-1.08 4.4 4.4 0 0 1-.714-5.307c.052.004.101.015.154.015A1.964 1.964 0 1 0 3.638 3.96c0 .289.066.561.178.809a6.39 6.39 0 0 0 .932 7.867c.54.542 1.157.974 1.841 1.291v.083a2.7 2.7 0 0 0 1.705 2.503v.037A5.457 5.457 0 0 0 13.745 22a5.456 5.456 0 0 0 5.41-4.815 2.94 2.94 0 0 0 1.973-2.765"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStethoscopeBold;
