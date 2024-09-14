import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTidalLight = ({
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
      d="M11.377 12.68a.846.846 0 0 1 1.247 0l1.953 2.132a.846.846 0 0 1 0 1.142l-1.953 2.131a.846.846 0 0 1-1.247 0l-1.954-2.13a.846.846 0 0 1 0-1.143zM11.377 5.915a.846.846 0 0 1 1.247 0l1.953 2.13a.846.846 0 0 1 0 1.144l-1.953 2.13a.846.846 0 0 1-1.247 0L9.423 9.19a.846.846 0 0 1 0-1.143zM17.578 5.915a.846.846 0 0 1 1.246 0l1.954 2.13a.846.846 0 0 1 0 1.144l-1.954 2.13a.846.846 0 0 1-1.246 0l-1.953-2.13a.846.846 0 0 1 0-1.143zM5.176 5.915a.846.846 0 0 1 1.247 0l1.953 2.13a.846.846 0 0 1 0 1.144l-1.953 2.13a.846.846 0 0 1-1.247 0L3.222 9.19a.846.846 0 0 1 0-1.143z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTidalLight;
