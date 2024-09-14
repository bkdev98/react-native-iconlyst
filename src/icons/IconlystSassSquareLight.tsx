import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSassSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.6 13.845c.726-.153 1.155-.22 1.942-.22 2.74 0 2.375 1.908 1.996 2.782M11.6 13.845c-.777-1.505-2.766-2.237-3.156-3.923-.288-1.242.623-2.813 2.61-3.274 1.988-.461 3.29.224 3.497 1.108s-.347 1.79-2.5 2.29m-.451 3.8c.664 1.287.477 2.682-.718 3.319-1.502.8-3.662.148-2.188-1.76.72-.935 1.784-1.323 2.906-1.56"
    />
  </Svg>
);
export default IconlystSassSquareLight;
