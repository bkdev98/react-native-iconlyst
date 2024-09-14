import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldRefreshOutline = ({
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
      d="M12.094 3.75c-4.52 0-8.18 3.67-8.18 8.18 0 4.3 3.302 7.825 7.515 8.165a.75.75 0 0 1-.12 1.495 9.684 9.684 0 0 1-8.896-9.66c0-5.338 4.332-9.68 9.68-9.68 4.948 0 9.016 3.709 9.6 8.493a.75.75 0 0 1-1.488.182c-.494-4.043-3.933-7.175-8.111-7.175"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.515 4.289c.565-1.075 1.417-2.039 2.579-2.039 1.166 0 2.018.963 2.583 2.04.595 1.133 1.033 2.68 1.272 4.432.106.724.175 1.484.203 2.27a.75.75 0 1 1-1.5.055 19 19 0 0 0-.187-2.11l-.001-.008c-.225-1.649-.628-3.014-1.115-3.943-.518-.987-.99-1.236-1.255-1.236-.26 0-.732.248-1.252 1.237-.488.93-.893 2.294-1.118 3.942v.005h-.001a21 21 0 0 0-.205 2.997c0 1.063.071 2.077.205 3.005v.005c.311 2.255 1.27 4.375 2.2 5.396a.75.75 0 0 1-1.108 1.01c-1.188-1.303-2.237-3.733-2.577-6.199a23 23 0 0 1-.22-3.217c0-1.129.075-2.205.22-3.208.24-1.753.68-3.3 1.277-4.434"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.413 11.941a.75.75 0 0 1 .75-.75h8.527a.75.75 0 0 1 0 1.5H3.163a.75.75 0 0 1-.75-.75M14.572 15.998a3.97 3.97 0 1 1 .15 3.838.75.75 0 0 1 1.283-.777 2.469 2.469 0 1 0-.094-2.386.75.75 0 1 1-1.34-.675"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.241 13.813a.75.75 0 0 1 .75.75v1.022h1.032a.75.75 0 0 1 0 1.5h-1.782a.75.75 0 0 1-.75-.75v-1.773a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldRefreshOutline;
