import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookOutline = ({
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
      d="M8.862 21.749a4.52 4.52 0 0 1-4.494-4.39V6.834a4.5 4.5 0 0 1 4.4-4.584h8.509a4.55 4.55 0 0 1 4.407 4.587v10.327a4.507 4.507 0 0 1-4.4 4.585zm8.389-18H8.795a3 3 0 0 0-2.927 3.067v10.525a3.01 3.01 0 0 0 3 2.907h8.4a3 3 0 0 0 2.92-3.068V6.829a3.05 3.05 0 0 0-2.936-3.081z"
    />
    <Path
      fill={props.color}
      d="M6.892 17.447H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5m0-4.7H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5m0-4.7H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystNotebookOutline;
