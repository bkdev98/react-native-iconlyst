import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerTwoTone = ({
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
      d="M9.24 21h6.521a3.684 3.684 0 0 0 3.684-3.684V6.685A3.684 3.684 0 0 0 15.76 3H9.24a3.684 3.684 0 0 0-3.684 3.685v10.631A3.684 3.684 0 0 0 9.239 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 10.465a3.463 3.463 0 1 1 0 6.925 3.463 3.463 0 0 1 0-6.925"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.442 6.81v.023m.059-.259a.29.29 0 1 1-.003.58.29.29 0 0 1 .003-.58"
    />
  </Svg>
);
export default IconlystSpeakerTwoTone;
