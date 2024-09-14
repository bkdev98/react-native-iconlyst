import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeamviewerCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.855 11.618a.5.5 0 0 1 0 .765l-3.15 2.655a.5.5 0 0 1-.822-.382v-1.409h-3.765v1.409a.5.5 0 0 1-.822.382l-3.15-2.655a.5.5 0 0 1 0-.765l3.15-2.656a.5.5 0 0 1 .822.383v1.408h3.765V9.345a.5.5 0 0 1 .822-.383z"
    />
  </Svg>
);
export default IconlystTeamviewerCircleTwoTone;
