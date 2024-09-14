import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone4TwoTone = ({
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
      d="M11.353 14.964v.01m-5.678-1.428a44 44 0 0 1 9.549 2.878c1.61.694 3.41-.455 3.412-2.209l.01-7.465c.003-2.69-1.794-3.84-3.408-3.15a44 44 0 0 1-9.561 2.854c-1.451.254-2.174 1.52-2.176 2.993L3.5 10.546c-.002 1.476.721 2.74 2.175 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.637 13.344a3.366 3.366 0 0 0 .008-6.656M11.353 14.974c.152 1.108.446 3.268.484 3.808.066.787-.351 1.45-1.024 1.706-.682.265-1.553.028-1.99-.588-.208-.274-.35-.606-.454-.938-.474-1.506-1.108-3.656-1.572-5.2M7.878 6.035 7.873 9.76"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSpeakerMegaphone4TwoTone;
