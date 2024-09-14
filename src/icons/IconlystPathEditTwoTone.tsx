import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathEditTwoTone = ({
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
      d="M17.186 5.138v2.108c0 .733.52 1.194 1.256 1.194h1.985c.736 0 1.256-.458 1.256-1.194V5.138c0-.736-.52-1.195-1.256-1.195h-1.985c-.736 0-1.256.459-1.256 1.195M3.684 5.138v2.108c0 .733.52 1.194 1.256 1.194h1.985c.735 0 1.256-.458 1.256-1.194V5.138c0-.736-.52-1.195-1.256-1.195H4.94c-.737 0-1.256.459-1.256 1.195M3.684 18.641v2.107c0 .734.52 1.195 1.256 1.195h1.985c.735 0 1.256-.458 1.256-1.195v-2.107c0-.737-.52-1.195-1.256-1.195H4.94c-.737 0-1.256.458-1.256 1.195"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.203 6.174h8.993m-8.993 13.52h3.155M5.968 8.44v9.007M19.437 8.44v2.196"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.406 21.674-.977.164a1.094 1.094 0 0 1-1.268-1.197l.109-1.007a2.34 2.34 0 0 1 .582-1.308l3.61-4a1.34 1.34 0 0 1 1.894-.072l.898.83a1.34 1.34 0 0 1 .073 1.895l-3.563 3.946a2.34 2.34 0 0 1-1.358.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathEditTwoTone;
