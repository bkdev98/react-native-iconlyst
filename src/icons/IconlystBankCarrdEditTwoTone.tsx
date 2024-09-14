import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdEditTwoTone = ({
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
      d="M21.5 11.36V8.065c0-2.442-1.52-4.168-3.965-4.168H7.465C5.028 3.898 3.5 5.624 3.5 8.066v6.587c0 2.442 1.52 4.167 3.965 4.167h3.326"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.194h18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.384 19.974-.708.118a.792.792 0 0 1-.917-.867l.078-.729c.038-.352.185-.683.422-.947l3.08-3.363a.97.97 0 0 1 1.372-.052l.65.601a.97.97 0 0 1 .053 1.372l-3.047 3.325a1.7 1.7 0 0 1-.983.542"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdEditTwoTone;
