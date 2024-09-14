import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowCloudTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.114 9.718c-3.09-.217-5.177 1.134-6.477 2.48M20.933 7.016c-3.591-.252-6.065 1.24-7.654 2.803M20.933 4.381c-5.124-.358-8.369 2.214-10.198 4.403"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.494 12.856c-1.868.017-3.379 1.271-3.379 3.409a3.41 3.41 0 0 0 2.007 3.108c.497.202.993.28 1.37.28h8.065a3.8 3.8 0 0 0 1.378-.276 3.41 3.41 0 0 0 2.003-3.112c0-2.138-1.51-3.392-3.378-3.41 0-1.344-1.055-4.033-4.033-4.033s-4.033 2.69-4.033 4.034"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRainbowCloudTwoTone;
