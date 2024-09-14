import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEngineOilOutline = ({
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
      d="M9.897 3.362a3.74 3.74 0 0 1 2.414-.883h4.431a3.74 3.74 0 0 1 3.739 3.738v11.794a3.74 3.74 0 0 1-3.739 3.739H7.758a3.74 3.74 0 0 1-3.738-3.739v-7.944c0-1.1.484-2.145 1.324-2.855zm2.414.617c-.53 0-1.041.187-1.445.529l-4.553 3.85a2.24 2.24 0 0 0-.793 1.709v7.944a2.24 2.24 0 0 0 2.238 2.239h8.984a2.24 2.24 0 0 0 2.239-2.239V6.217a2.24 2.24 0 0 0-2.239-2.238z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.11 3.939a.645.645 0 0 0-.871-.037l-1.361 1.15a.645.645 0 0 0-.04.949l.892.891a.75.75 0 0 1-1.061 1.06l-.891-.89a2.145 2.145 0 0 1 .131-3.155l1.361-1.15a2.145 2.145 0 0 1 2.901.121l-.53.53.53-.53 1.065 1.065a.75.75 0 1 1-1.06 1.06zM9 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 9 16M12.658 7.37 12.25 8l-.407-.63a.75.75 0 0 1 .815 0m-.816 1.26q0-.001 0 0m.408.3q.079.062.166.135c.34.286.741.674 1.052 1.117.22.355.235.87.006 1.321a1.32 1.32 0 0 1-1.224.747 1.32 1.32 0 0 1-1.224-.747c-.229-.45-.214-.966.006-1.32.31-.444.713-.832 1.052-1.118q.088-.073.166-.135m-.407-1.56.407.63.408-.63v.001l.002.001.004.003.014.008a4 4 0 0 1 .198.139c.128.092.305.226.506.396.397.334.911.824 1.327 1.42l.016.025c.555.869.52 1.964.087 2.819a2.82 2.82 0 0 1-2.562 1.568 2.82 2.82 0 0 1-2.562-1.569c-.433-.854-.468-1.95.087-2.818l.017-.024c.415-.597.93-1.087 1.327-1.421a9 9 0 0 1 .704-.535l.013-.008.004-.003.002-.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEngineOilOutline;
