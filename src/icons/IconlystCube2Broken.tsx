import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube2Broken = ({
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
      d="M20.621 15.282c0 .87-.464 1.674-1.217 2.109l-5.686 3.282a2.43 2.43 0 0 1-2.435 0l-5.686-3.282a2.44 2.44 0 0 1-1.217-2.109V8.717c0-.87.464-1.674 1.217-2.109l5.686-3.282a2.44 2.44 0 0 1 2.435 0l5.686 3.282a2.44 2.44 0 0 1 1.217 2.109V12M7.865 14.676l1.5-.866M17.137 14.676l-1.5-.866M12.5 6.648v1.733M12.5 18.155v-6.128M12.5 12.028l7.724-4.46M9.805 10.472l-5.03-2.904"
    />
  </Svg>
);
export default IconlystCube2Broken;
