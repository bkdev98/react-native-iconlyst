import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathExpandTwoTone = ({
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
      d="M17.189 5.138v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195V5.138c0-.736-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.459-1.256 1.195M3.686 5.138v2.107c0 .734.52 1.195 1.256 1.195h1.984c.736 0 1.256-.458 1.256-1.195V5.138c0-.736-.52-1.195-1.256-1.195H4.942c-.737 0-1.256.459-1.256 1.195M17.189 18.64v2.108c0 .733.52 1.194 1.256 1.194h1.985c.735 0 1.256-.458 1.256-1.194V18.64c0-.736-.521-1.195-1.256-1.195h-1.985c-.737 0-1.256.459-1.256 1.195M3.686 18.64v2.108c0 .733.52 1.194 1.256 1.194h1.984c.736 0 1.256-.458 1.256-1.194V18.64c0-.736-.52-1.195-1.256-1.195H4.942c-.737 0-1.256.459-1.256 1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.259 15.505h-2.135l-.001-2.136M13.113 10.38h2.136v2.135M10.123 15.505l5.124-5.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.203 6.174h8.993m-8.993 13.52h8.993M5.97 8.44v9.006M19.436 8.44v9.006"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPathExpandTwoTone;