import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashLight = ({
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
      d="m11.307 3.412-6.695 9.222a.995.995 0 0 0 .804 1.58h5.477v5.79c0 .963 1.235 1.364 1.801.583l6.695-9.22a.995.995 0 0 0-.805-1.58h-5.477v-5.79c0-.964-1.234-1.365-1.8-.585"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashLight;
