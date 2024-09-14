import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendMessageBold = ({
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
      d="M20.877 3.916a2.08 2.08 0 0 0-2.087-.532L4.017 7.732c-.811.24-1.384.91-1.497 1.75a2.09 2.09 0 0 0 .983 2.084l5.123 3.169a.4.4 0 0 0 .495-.06l6.149-6.222a.75.75 0 1 1 1.066 1.054l-6.167 6.24a.4.4 0 0 0-.056.49l3.14 5.113a2.08 2.08 0 0 0 2.08.986 2.08 2.08 0 0 0 1.745-1.501L21.412 6.01a2.09 2.09 0 0 0-.535-2.095"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendMessageBold;
