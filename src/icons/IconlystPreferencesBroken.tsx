import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPreferencesBroken = ({
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
      d="M12.23 21H8.258c-2.945 0-5.027-1.835-5.027-4.784V7.782C3.23 4.834 5.312 3 8.257 3h7.947c2.945 0 5.026 1.843 5.026 4.782v8.435c0 2.948-2.08 4.783-5.026 4.783h-.57"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.503 13.879a1.152 1.152 0 1 0 1.144 1.159v-.008a1.147 1.147 0 0 0-1.144-1.151M14.96 10.119a1.152 1.152 0 1 0-1.143-1.16v.008c-.002.634.51 1.15 1.143 1.151"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.494 10.885V7.816M14.967 13.111v3.07"
    />
  </Svg>
);
export default IconlystPreferencesBroken;
