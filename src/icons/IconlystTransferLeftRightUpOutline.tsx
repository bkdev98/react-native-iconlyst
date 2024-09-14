import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftRightUpOutline = ({
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
      d="M18.413 4.293a.75.75 0 0 1 .13.652l-2.064 7.684a.75.75 0 0 1-1.319.263L14.01 11.4l-3.7 2.848a.75.75 0 0 1-1.052-.136l-.682-.886-1.416 5.271 5.458-.02-.681-.886a.75.75 0 0 1 .136-1.052l2.864-2.204a.75.75 0 0 1 .915 1.19l-2.27 1.746 1.15 1.493a.75.75 0 0 1-.591 1.208L6.183 20a.75.75 0 0 1-.727-.945l2.065-7.684a.75.75 0 0 1 1.318-.263L9.99 12.6l3.7-2.848a.75.75 0 0 1 1.053.136l.682.886 1.416-5.271-5.459.02.682.886a.75.75 0 0 1-.137 1.052L9.063 9.666a.75.75 0 1 1-.915-1.19l2.269-1.746-1.15-1.493a.75.75 0 0 1 .592-1.208L17.816 4a.75.75 0 0 1 .597.293"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLeftRightUpOutline;
