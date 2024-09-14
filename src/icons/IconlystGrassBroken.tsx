import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrassBroken = ({
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
      d="M3 19.739h18M11.866 4.26c.226 1.47.18 2.953-.038 4.353M8.202 19.739c-.55-2.567-2.136-6.19-4.966-8.622 0 0 .78 2.967 1.144 5.626"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.651 13.527c-.88-2.296-2.244-4.81-4.34-6.751 1.198 5.032.287 8.653.287 8.653M11.922 19.74s.9-9.755 6.042-14.52c-.72 3.123-.794 5.613-.664 7.391M15.906 19.74c.55-2.568 2.03-4.302 4.86-6.735-.78 2.186-1.102 4.45-1.418 6.734"
    />
  </Svg>
);
export default IconlystGrassBroken;
