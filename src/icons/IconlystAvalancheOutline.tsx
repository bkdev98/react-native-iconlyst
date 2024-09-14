import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAvalancheOutline = ({
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
      fill={props.color}
      d="M7.834 20.175H4a1.5 1.5 0 0 1-1.294-2.253l7.878-13.5a1.49 1.49 0 0 1 1.915-.604c.224.103.42.26.569.455l2.157 2.843.026.037a3.36 3.36 0 0 1 .144 3.724l-4.76 7.645a3.42 3.42 0 0 1-2.802 1.653m4.042-15-7.873 13.5h3.83a1.93 1.93 0 0 0 1.526-.937l4.78-7.677A1.92 1.92 0 0 0 14.019 8zM20.464 20.322h-5.751a1.536 1.536 0 0 1-1.322-2.32l2.876-4.844a1.52 1.52 0 0 1 1.32-.752 1.52 1.52 0 0 1 1.32.752l2.876 4.844a1.536 1.536 0 0 1-1.32 2.32m-2.845-6.4-2.938 4.844 5.783.054.03-.054z"
    />
  </Svg>
);
export default IconlystAvalancheOutline;
