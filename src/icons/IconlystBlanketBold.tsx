import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlanketBold = ({
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
      d="M19.948 9.376h-3.492c-.616 0-1.192.275-1.581.752l-1.37 1.674a.433.433 0 0 1-.665.001L11.47 10.13a2.03 2.03 0 0 0-1.581-.753H6.044c-1.2 0-2.179.98-2.179 2.181v.885c0 1.203.978 2.182 2.179 2.182h13.904c1.201 0 2.179-.98 2.179-2.182v-.885c0-1.202-.978-2.18-2.179-2.18M19.948 3H6.044c-1.2 0-2.179.974-2.179 2.173v.892c0 1.203.978 2.182 2.179 2.182h13.904c1.201 0 2.179-.979 2.179-2.182v-.892A2.18 2.18 0 0 0 19.948 3M19.948 15.753H6.044c-1.2 0-2.179.979-2.179 2.18v.893A2.18 2.18 0 0 0 6.044 21h13.904a2.18 2.18 0 0 0 2.179-2.174v-.893c0-1.201-.978-2.18-2.179-2.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlanketBold;
