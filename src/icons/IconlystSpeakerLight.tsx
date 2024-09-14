import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerLight = ({
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
      d="M8.74 21h6.521a3.684 3.684 0 0 0 3.684-3.684V6.685A3.684 3.684 0 0 0 15.26 3H8.74a3.685 3.685 0 0 0-3.684 3.685v10.631A3.684 3.684 0 0 0 8.739 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 10.395a3.498 3.498 0 1 1 0 6.995 3.498 3.498 0 0 1 0-6.995"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.403 6.611h-2.807"
    />
  </Svg>
);
export default IconlystSpeakerLight;
