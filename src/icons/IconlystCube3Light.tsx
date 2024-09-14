import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube3Light = ({
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
      d="M20.121 8.717v6.565c0 .87-.464 1.674-1.217 2.109l-5.686 3.282a2.43 2.43 0 0 1-2.435 0l-5.686-3.282a2.44 2.44 0 0 1-1.217-2.109V8.717c0-.87.464-1.674 1.217-2.109l5.686-3.282a2.44 2.44 0 0 1 2.435 0l5.686 3.282a2.44 2.44 0 0 1 1.217 2.109M19.806 7.567l-15.61 8.96M4.194 7.567l15.61 8.96M12 20.946V3.033"
    />
  </Svg>
);
export default IconlystCube3Light;
