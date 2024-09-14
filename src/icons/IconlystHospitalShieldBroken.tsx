import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalShieldBroken = ({
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
      d="M19.324 12.668C19.324 18.783 12 21 12 21s-7.323-2.216-7.323-8.332c0-6.113-.267-6.59.32-7.178C5.588 4.902 11.04 3 12 3s6.413 1.896 7 2.49c.59.592.324 1.066.324 7.178"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.876 14.701h-1.75a.5.5 0 0 1-.5-.499V12.78H9.203a.5.5 0 0 1-.499-.5v-1.755a.5.5 0 0 1 .5-.499h1.424M11.126 8.105h1.75a.5.5 0 0 1 .5.5v1.421H14.8a.5.5 0 0 1 .5.5v1.755c0 .276-.225.499-.5.499h-1.424"
    />
  </Svg>
);
export default IconlystHospitalShieldBroken;
