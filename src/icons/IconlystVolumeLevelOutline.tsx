import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLevelOutline = ({
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
      d="M18.084 7.485A8.25 8.25 0 1 0 6.416 19.152a.75.75 0 1 1-1.06 1.06c-3.808-3.807-3.808-9.98 0-13.788s9.98-3.808 13.788 0 3.808 9.981 0 13.789a.75.75 0 0 1-1.06-1.061 8.25 8.25 0 0 0 0-11.667"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 9.44a3.879 3.879 0 1 0 0 7.757 3.879 3.879 0 0 0 0-7.758M6.87 13.32a5.379 5.379 0 1 1 10.758-.002 5.379 5.379 0 0 1-10.758.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.073 11.495a.75.75 0 0 1 0 1.06l-1.17 1.17a.75.75 0 0 1-1.06-1.06l1.17-1.17a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeLevelOutline;
