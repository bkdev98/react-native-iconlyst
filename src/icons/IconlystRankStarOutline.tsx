import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRankStarOutline = ({
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
      d="M3.028 16.06c0-1.196.97-2.165 2.165-2.165h4.233a.75.75 0 0 1 0 1.5H5.193a.665.665 0 0 0-.665.664v3.526c0 .364.3.665.665.665h14.115c.364 0 .665-.3.665-.665v-1.643a.665.665 0 0 0-.665-.665h-4.234a.75.75 0 0 1 0-1.5h4.234c1.195 0 2.165.97 2.165 2.165v1.643a2.17 2.17 0 0 1-2.165 2.165H5.193a2.17 2.17 0 0 1-2.165-2.165zM12.249 4.134l.366.733v.002c.177.349.51.585.893.64l.802.116-.571.548a1.17 1.17 0 0 0-.347 1.051l.138.79-.733-.379a1.19 1.19 0 0 0-1.096 0l-.734.38.138-.789a1.18 1.18 0 0 0-.346-1.052l-.573-.55.8-.114c.388-.055.72-.297.894-.641zm.547-1.75a1.19 1.19 0 0 0-1.603.51l-.579 1.154-1.285.184a1.2 1.2 0 0 0-.686.348l-.003.003a1.18 1.18 0 0 0 .03 1.666l.002.002.925.887-.218 1.25-.002.014c-.04.25.002.512.125.743l.662-.354-.664.35c.306.58 1.022.798 1.598.496l1.151-.597 1.15.596A1.185 1.185 0 0 0 15.12 8.4l-.22-1.261.925-.888a1.177 1.177 0 0 0-.657-2.018l-1.285-.184-.572-1.146-.005-.01a1.2 1.2 0 0 0-.508-.508m-.40399999999999997 6.583"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.84 12.336c-.364 0-.664.3-.664.665v7.998a.75.75 0 0 1-1.5 0v-7.998c0-1.193.972-2.165 2.165-2.165h2.818c1.196 0 2.165.97 2.165 2.165v7.998a.75.75 0 0 1-1.5 0v-7.998a.665.665 0 0 0-.665-.665z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRankStarOutline;
