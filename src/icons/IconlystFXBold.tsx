import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFXBold = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      d="M17.456 14.586a.75.75 0 1 1-1.193.907l-1.485-1.954-1.482 1.95a.747.747 0 0 1-1.051.144.75.75 0 0 1-.143-1.051l1.735-2.282-1.735-2.282a.75.75 0 0 1 1.194-.907l1.483 1.952 1.484-1.952a.75.75 0 1 1 1.193.907l-1.736 2.284zm-7.261-4.271H8.166v1.239h1.762a.75.75 0 0 1 0 1.5H8.166v1.984a.75.75 0 0 1-1.5 0V9.565a.75.75 0 0 1 .75-.75h2.779a.75.75 0 1 1 0 1.5m6.017-7.508H7.778c-3.157 0-5.278 2.218-5.278 5.52v7.947c0 3.303 2.121 5.522 5.278 5.522h8.434c3.163 0 5.288-2.22 5.288-5.522V8.328c0-3.303-2.125-5.521-5.288-5.521"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFXBold;
