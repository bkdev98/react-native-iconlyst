import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboardCloseDownOutline = ({
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
      d="M15.198 19.061a.75.75 0 0 1-.215 1.039l-2.328 1.527a.75.75 0 0 1-.823 0l-2.317-1.52a.75.75 0 0 1 .822-1.254l1.906 1.25 1.917-1.257a.75.75 0 0 1 1.038.215M4.223 3.63c.977-.938 2.344-1.38 3.914-1.38h8.227c1.57 0 2.938.451 3.916 1.403.981.956 1.476 2.323 1.476 3.966v4.669c0 1.623-.497 2.972-1.482 3.912-.979.934-2.345 1.373-3.91 1.373H8.128c-1.568 0-2.935-.438-3.913-1.374-.982-.94-1.474-2.29-1.469-3.913V7.546c0-1.622.494-2.973 1.477-3.916M5.26 4.711c-.621.596-1.015 1.517-1.015 2.833v4.745c-.004 1.315.388 2.233 1.006 2.825.625.598 1.578.958 2.876.958h8.236c1.293 0 2.247-.36 2.875-.958.622-.594 1.017-1.513 1.017-2.827v-4.67c0-1.34-.398-2.282-1.023-2.89-.628-.611-1.58-.978-2.869-.978H8.137c-1.297 0-2.25.362-2.876.962"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.754 13.213a.75.75 0 0 1 .75-.75h5.491a.75.75 0 0 1 0 1.5H9.504a.75.75 0 0 1-.75-.75M6.396 6.835a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M13.043 6.835a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M9.72 6.835a.863.863 0 1 1 1.727 0 .863.863 0 0 1-1.726 0M16.367 6.835a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M11.383 9.636a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M8.059 9.636a.863.863 0 1 1 1.725 0 .863.863 0 0 1-1.725 0M14.705 9.636a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboardCloseDownOutline;
