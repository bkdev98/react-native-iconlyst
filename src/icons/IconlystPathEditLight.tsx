import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathEditLight = ({
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
      d="M16.686 5.138v2.108c0 .733.52 1.194 1.256 1.194h1.985c.736 0 1.256-.458 1.256-1.194V5.138c0-.736-.52-1.195-1.256-1.195h-1.985c-.736 0-1.256.459-1.256 1.195M3.184 5.138v2.108c0 .733.52 1.194 1.256 1.194h1.985c.735 0 1.256-.458 1.256-1.194V5.138c0-.736-.52-1.195-1.256-1.195H4.44c-.737 0-1.256.459-1.256 1.195M3.184 18.641v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195v-2.107c0-.737-.52-1.195-1.256-1.195H4.44c-.737 0-1.256.458-1.256 1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.703 6.174h8.993m-8.993 13.52h3.155M5.468 8.44v9.007M18.937 8.44v2.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.906 21.674-.977.164a1.094 1.094 0 0 1-1.268-1.197l.109-1.007a2.34 2.34 0 0 1 .582-1.308l3.61-4a1.34 1.34 0 0 1 1.894-.072l.898.83a1.34 1.34 0 0 1 .073 1.895l-3.563 3.946a2.34 2.34 0 0 1-1.358.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathEditLight;
