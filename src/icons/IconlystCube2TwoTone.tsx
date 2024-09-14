import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube2TwoTone = ({
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
      d="M4.38 8.717v6.565c0 .87.464 1.674 1.217 2.109l5.686 3.282a2.43 2.43 0 0 0 2.435 0l5.686-3.282a2.44 2.44 0 0 0 1.217-2.109V8.717c0-.87-.464-1.674-1.217-2.109l-5.686-3.282a2.44 2.44 0 0 0-2.435 0L5.597 6.608A2.44 2.44 0 0 0 4.38 8.717"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.865 14.676 1.5-.866M17.137 14.676l-1.5-.866M12.5 6.648v1.733"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 20.946v-8.919M12.5 12.028l7.724-4.46M12.499 12.028l-7.724-4.46"
    />
  </Svg>
);
export default IconlystCube2TwoTone;
