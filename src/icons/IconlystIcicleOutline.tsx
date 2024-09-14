import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIcicleOutline = ({
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
      d="M16.943 7.064a.75.75 0 0 1 .254 1.03l-2.387 3.949-1.178 6.193a.75.75 0 0 1-1.435.133l-3.281-8.39a.75.75 0 1 1 1.397-.547l2.332 5.965.716-3.767a.8.8 0 0 1 .095-.248l2.457-4.064a.75.75 0 0 1 1.03-.254"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.162 2.559a.75.75 0 0 1 .102.686l-1.473 4.257 1.408 2.347a.75.75 0 0 1-.012.791l-3.06 4.765a.75.75 0 0 1-1.379-.36l-.282-4.565-2.714-4.127a.75.75 0 0 1 1.254-.824l2.823 4.294a.75.75 0 0 1 .122.366l.153 2.476 1.569-2.443-1.349-2.248a.75.75 0 0 1-.066-.631l1.236-3.57L5.26 4.09l-.752 4.79 1.919.778a.75.75 0 0 1 .411.408l.995 2.407 1.252-4.459-2.64-1.15a.75.75 0 1 1 .599-1.375l2.45 1.068.164-.583a.75.75 0 0 1 1.444.405L8.69 14.967a.75.75 0 0 1-1.415.084L5.57 10.93l-2.179-.882a.75.75 0 0 1-.46-.811l.942-6a.75.75 0 0 1 .725-.634l16.94-.353a.75.75 0 0 1 .623.309M16.4 16.59a.75.75 0 0 1 .634.052l2.316 1.324a.75.75 0 0 1 .236 1.09l-1.72 2.383a.75.75 0 0 1-1.194.03l-1.324-1.655a.75.75 0 0 1-.121-.72l.728-2.051a.75.75 0 0 1 .446-.453m.669 1.8-.289.813.447.558.655-.907zM6.243 15.26a.75.75 0 0 0-.665.078L3.26 16.86a.75.75 0 0 0-.223 1.026l1.72 2.74a.75.75 0 0 0 1.252.03l1.323-1.903a.75.75 0 0 0 .101-.65l-.728-2.36a.75.75 0 0 0-.463-.484m-.676 1.88.326 1.056-.467.672-.727-1.158z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIcicleOutline;
