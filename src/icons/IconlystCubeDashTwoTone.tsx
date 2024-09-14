import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeDashTwoTone = ({
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
      d="M20.621 8.717v6.565c0 .87-.464 1.674-1.217 2.109l-5.686 3.282a2.43 2.43 0 0 1-2.435 0l-5.686-3.282a2.44 2.44 0 0 1-1.217-2.109V8.717c0-.87.464-1.674 1.217-2.109l5.686-3.282a2.44 2.44 0 0 1 2.435 0l5.686 3.282a2.44 2.44 0 0 1 1.217 2.109"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 14.947v-2.92m0 0-2.53-1.46m2.53 1.46 2.529-1.46M12.5 20.946v-2.92M17.695 9.028l2.53-1.46M4.775 7.567l2.53 1.46"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCubeDashTwoTone;
