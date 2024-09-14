import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBubbleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.137 20.466a8 8 0 0 1-1.622-.554c-.446-.18-.811-.325-1.158-.325-.967.005-2.171.946-2.796.32-.626-.628.312-1.836.312-2.812 0-.349-.139-.71-.318-1.156-1.395-3.027-.857-6.727 1.633-9.225a8.13 8.13 0 0 1 11.52 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.823 19.989a5.14 5.14 0 0 1-5.806-1.035 5.175 5.175 0 0 1 0-7.3 5.136 5.136 0 0 1 7.276 0 5.18 5.18 0 0 1 1.03 5.826c-.113.282-.2.51-.2.729 0 .617.591 1.38.196 1.776s-1.155-.198-1.765-.202c-.22 0-.45.092-.731.206"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMessagesBubbleTwoTone;
