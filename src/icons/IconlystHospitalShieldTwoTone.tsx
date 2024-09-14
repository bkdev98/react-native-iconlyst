import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalShieldTwoTone = ({
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
      d="M20.234 12.668c0 6.115-7.324 8.332-7.324 8.332s-7.323-2.216-7.323-8.332c0-6.113-.267-6.59.32-7.178C6.498 4.902 11.95 3 12.91 3s6.413 1.896 7 2.49c.59.592.324 1.066.324 7.178"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.786 14.701h-1.75a.5.5 0 0 1-.5-.499V12.78h-1.424a.5.5 0 0 1-.499-.5v-1.755a.5.5 0 0 1 .5-.499h1.424V8.605a.5.5 0 0 1 .499-.5h1.75a.5.5 0 0 1 .5.5v1.421h1.424a.5.5 0 0 1 .5.5v1.755c0 .276-.225.499-.5.499h-1.424v1.422a.5.5 0 0 1-.5.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalShieldTwoTone;
