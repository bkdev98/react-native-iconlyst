import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCoinLight = ({
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
      d="m18.281 16.474 1.359-1.359 1.359 1.359M5.718 7.564 4.359 8.923 3 7.564"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.36 8.922V5.695a2.22 2.22 0 0 1 2.22-2.22h1.176M19.641 15.115v3.227a2.22 2.22 0 0 1-2.22 2.22h-1.177"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.669 7.16a3.8 3.8 0 1 0-7.602 0 3.8 3.8 0 0 0 7.602 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.202 16.142h3.18a1.449 1.449 0 0 0-.019-2.898H5.496"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.494 19.704h4.061a1.782 1.782 0 0 0 0-3.563h-.301M6.041 13.244v6.461M6.904 19.707v.934m2.48-.934v.934M6.904 12.309v.936m2.48-.936v.936"
    />
  </Svg>
);
export default IconlystBitcoinCoinLight;
