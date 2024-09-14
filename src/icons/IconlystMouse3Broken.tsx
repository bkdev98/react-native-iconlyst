import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouse3Broken = ({
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
      d="M12.5 7.672v2.023m6.696 1.264V7.866A4.866 4.866 0 0 0 14.33 3h-3.658a4.866 4.866 0 0 0-4.867 4.867v8.267A4.866 4.866 0 0 0 10.673 21h3.659a4.867 4.867 0 0 0 4.866-4.867v-2.067"
    />
  </Svg>
);
export default IconlystMouse3Broken;
