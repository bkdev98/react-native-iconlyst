import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVdeoTvBroken = ({
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
      d="M12.084 3.658h4.97a4.03 4.03 0 0 1 4.03 4.03v5.456a4.03 4.03 0 0 1-4.03 4.029H7.113a4.03 4.03 0 0 1-4.028-4.03V7.688a4.03 4.03 0 0 1 4.028-4.029H8.41M7.588 20.344h8.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.81 12.795c-.683.287-1.38-.042-1.481-.815-.11-.98-.113-2.033 0-3.13.093-.745.726-1.117 1.481-.82a8 8 0 0 1 2.342 1.47c.596.547.582 1.298 0 1.826"
    />
  </Svg>
);
export default IconlystVdeoTvBroken;
