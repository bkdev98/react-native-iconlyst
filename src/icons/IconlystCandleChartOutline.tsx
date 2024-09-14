import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.709 17.225a.75.75 0 0 0 .75-.75v-2.402a.75.75 0 1 0-1.5 0v2.402c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.414 13.057c0 .978.795 1.766 1.769 1.766h1.051c.975 0 1.77-.788 1.77-1.766V9.91c0-.978-.796-1.764-1.77-1.764h-1.051c-.974 0-1.769.786-1.769 1.764zm1.769.266a.267.267 0 0 1-.269-.266V9.91c0-.143.118-.264.269-.264h1.051c.152 0 .27.121.27.264v3.148a.267.267 0 0 1-.27.266z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.709 9.645a.75.75 0 0 0 .75-.75V6.492a.75.75 0 0 0-1.5 0v2.403c0 .414.336.75.75.75M17.23 15.852a.75.75 0 0 0 .75-.75V12.7a.75.75 0 0 0-1.5 0v2.402c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.936 11.684c0 .978.794 1.766 1.768 1.766h1.051c.975 0 1.77-.788 1.77-1.766V7.536c0-.978-.796-1.764-1.77-1.764h-1.05c-.974 0-1.77.786-1.77 1.764zm1.768.266a.267.267 0 0 1-.268-.266V7.536c0-.143.117-.264.268-.264h1.051c.152 0 .27.121.27.264v4.148a.267.267 0 0 1-.27.266z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.23 7.271a.75.75 0 0 0 .75-.75V4.12a.75.75 0 0 0-1.5 0V6.52c0 .415.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandleChartOutline;
