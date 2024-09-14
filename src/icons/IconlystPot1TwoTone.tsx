import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot1TwoTone = ({
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
      d="M5.385 10.81a7 7 0 0 0-.085 1.085v4.643c0 2.358 1.468 4.024 3.828 4.024h6.753c2.36 0 3.828-1.666 3.828-4.024l-.01-4.643q0-.57-.085-1.088"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.594 3.438V5.73m-1.276-2.292h2.372M12.5 5.731c-3.58 0-6.55 1.805-7.106 5.062h14.213C19.05 7.536 16.08 5.731 12.5 5.731"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 10.8h18"
    />
  </Svg>
);
export default IconlystPot1TwoTone;
