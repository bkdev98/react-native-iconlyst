import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.165 13.686h2.987a.946.946 0 0 0 .945-.946v-.035a2.795 2.795 0 1 0-5.59 0v.343a2.879 2.879 0 0 0 4.906 2.042.75.75 0 1 0-1.057-1.064 1.379 1.379 0 0 1-2.191-.34m-.049-1.5h2.373a1.295 1.295 0 0 0-2.373 0M7.315 7.988h1.994a2.366 2.366 0 0 1 1.728 3.982 2.365 2.365 0 0 1-1.728 3.983H7.313c-.59 0-1.073-.478-1.073-1.072V9.055a1.07 1.07 0 0 1 1.075-1.067m1.994 3.232a.866.866 0 0 0 0-1.732H7.74v1.733zm-1.569 1.5H9.31a.866.866 0 0 1 0 1.734H7.74zm-.43-3.232h.003z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBehanceCircleOutline;
