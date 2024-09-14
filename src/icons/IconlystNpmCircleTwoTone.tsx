import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNpmCircleTwoTone = ({
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
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.741 16.35a.54.54 0 0 1-.542-.542v-5.327c0-.3-.243-.542-.543-.542H12.25c-.3 0-.543.242-.543.542v5.327c0 .3-.242.542-.542.542h-2.69c-.6 0-1.085-.485-1.085-1.085V8.734c0-.599.485-1.084 1.085-1.084h7.051c.6 0 1.085.485 1.085 1.084v7.075c0 .3-.243.542-.542.542z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNpmCircleTwoTone;
