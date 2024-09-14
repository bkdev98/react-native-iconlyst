import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneErrorLight = ({
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
      d="M12 21v-2.848M15.173 12.717a3.67 3.67 0 0 1-3.17 1.84H12a3.667 3.667 0 0 1-3.658-3.676V6.658A3.66 3.66 0 0 1 12 3M15.658 4.227v3.095m.005 2.449v-.049"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.207 10.912A7.224 7.224 0 0 1 12 18.152a7.224 7.224 0 0 1-7.207-7.24"
    />
  </Svg>
);
export default IconlystMicrophoneErrorLight;
