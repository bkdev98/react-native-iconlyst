import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageAiOutline = ({
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
      d="M9.145 8.831a.946.946 0 1 0 0 1.893.946.946 0 0 0 0-1.893M6.7 9.778a2.446 2.446 0 1 1 4.893-.002 2.446 2.446 0 0 1-4.893.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.827 19.019c-.67-.718-1.077-1.77-1.077-3.075V8.058c0-1.306.405-2.357 1.073-3.075.663-.712 1.641-1.157 2.917-1.157h8.369c1.276 0 2.257.445 2.922 1.158.671.718 1.078 1.77 1.078 3.074v6.136a.75.75 0 0 0 1.5 0V8.058c0-1.616-.508-3.056-1.482-4.098-.979-1.048-2.372-1.634-4.018-1.634H7.74c-1.646 0-3.038.586-4.014 1.635C2.755 5.003 2.25 6.443 2.25 8.058v7.886c0 1.617.508 3.056 1.48 4.098.977 1.048 2.369 1.633 4.01 1.633h5.467a.75.75 0 1 0 0-1.5H7.74c-1.27 0-2.249-.444-2.913-1.156"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.602 12.615a.75.75 0 0 1-.704.794c-2.63.159-5.712.88-8.03 2.174-2.327 1.3-3.69 3.045-3.421 5.249a.75.75 0 1 1-1.489.182c-.378-3.093 1.624-5.315 4.18-6.74 2.564-1.432 5.88-2.194 8.67-2.362a.75.75 0 0 1 .794.703"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.354 14.974a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.406l-.273.102a3.01 3.01 0 0 0-1.779 1.781l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.273-.102a.75.75 0 0 1 0-1.406l.273-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m-.949 3.35c.362.267.681.587.949.949.267-.362.587-.682.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.949.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageAiOutline;
