import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTwoTone = ({
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
      d="M21.5 8.025v7.948c0 2.944-1.843 5.021-4.787 5.021H8.278c-2.945 0-4.778-2.077-4.778-5.021V8.025c0-2.945 1.843-5.021 4.778-5.021h8.435c2.944 0 4.787 2.076 4.787 5.02"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.969 16.342 1.49-1.572a1.366 1.366 0 0 1 1.929-.06h.002l.913.93c.54.55 1.426.56 1.977.019.036-.035 2.276-2.752 2.276-2.752.577-.7 1.614-.8 2.315-.223v0c.047.039 2.163 2.21 2.163 2.21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.875 9.23a1.71 1.71 0 1 1-3.42 0 1.71 1.71 0 0 1 3.42 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystImageTwoTone;
