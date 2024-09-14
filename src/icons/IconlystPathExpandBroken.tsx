import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathExpandBroken = ({
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
      d="M16.689 5.138v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195V5.138c0-.736-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.459-1.256 1.195M3.186 5.138v2.107c0 .734.52 1.195 1.256 1.195h1.984c.736 0 1.256-.458 1.256-1.195V5.138c0-.736-.52-1.195-1.256-1.195H4.442c-.737 0-1.256.459-1.256 1.195M16.689 18.64v2.108c0 .733.52 1.194 1.256 1.194h1.985c.735 0 1.256-.458 1.256-1.194V18.64c0-.736-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.459-1.256 1.195M3.186 18.64v2.108c0 .733.52 1.194 1.256 1.194h1.984c.736 0 1.256-.458 1.256-1.194V18.64c0-.736-.52-1.195-1.256-1.195H4.442c-.737 0-1.256.459-1.256 1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.759 15.505H9.624l-.001-2.136M12.613 10.38h2.136v2.135M9.623 15.505l5.124-5.124M10.625 6.176h6.04m-8.966 13.52h6.254M5.47 8.442v5.567m13.467-2.804v6.243"
    />
  </Svg>
);
export default IconlystPathExpandBroken;
