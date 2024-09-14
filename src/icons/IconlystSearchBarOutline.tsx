import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBarOutline = ({
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
      fillRule="evenodd"
      d="M3.002 6.208c.993-1.065 2.406-1.66 4.075-1.66h10.346c1.673 0 3.087.595 4.078 1.66C22.487 7.268 23 8.73 23 10.371v3.26c0 1.641-.515 3.103-1.502 4.161-.992 1.065-2.405 1.66-4.074 1.66H7.077c-1.673 0-3.086-.595-4.078-1.66-.986-1.059-1.499-2.52-1.499-4.162v-3.26c0-1.641.516-3.103 1.502-4.162M4.1 7.23C3.415 7.966 3 9.04 3 10.37v3.26c0 1.33.413 2.405 1.097 3.139.678.728 1.678 1.183 2.98 1.183h10.347c1.297 0 2.297-.454 2.977-1.183.685-.735 1.099-1.81 1.099-3.14v-3.26c0-1.33-.413-2.405-1.097-3.14-.678-.728-1.678-1.183-2.98-1.183H7.077c-1.297 0-2.298.455-2.977 1.184m10.579 2.424a2.02 2.02 0 1 0 1.353 3.52l.044-.04a2.02 2.02 0 0 0-1.397-3.48m2.906 4.008a3.52 3.52 0 1 0-1.092 1.03l.936.933a.75.75 0 0 0 1.06-1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBarOutline;
