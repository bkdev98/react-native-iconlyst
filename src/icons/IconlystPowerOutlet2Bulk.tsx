import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2Bulk = ({
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
      d="M15.291 5.809V3a.75.75 0 0 0-1.5 0v2.809zM10.209 5.809V3a.75.75 0 0 0-1.5 0v2.809zM12.76 14.659l-.01.001v2.927c.004.724.618 1.319 1.369 1.322h1.054c1.168 0 2.118.938 2.118 2.091a.75.75 0 0 1-1.5 0 .606.606 0 0 0-.618-.591h-1.057c-1.574-.007-2.858-1.271-2.866-2.818V14.66l-.01-.001z"
    />
    <Path
      fill={props.color}
      d="M15.932 5.81c.894 0 1.621.726 1.621 1.62v1.527c0 2.876-2.091 5.327-4.794 5.702H11.24a5.5 5.5 0 0 1-2.975-1.375 5.57 5.57 0 0 1-1.818-4.11V7.43c0-.894.727-1.62 1.621-1.62z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerOutlet2Bulk;
