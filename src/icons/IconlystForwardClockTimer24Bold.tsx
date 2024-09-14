import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer24Bold = ({
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
      d="M8.8 19.192a7.8 7.8 0 0 1-4.118-4.326c-1.54-4.009.468-8.535 4.472-10.088 3.015-1.162 6.394-.298 8.515 1.986h-.631a1 1 0 0 0 0 2h2.918a1 1 0 0 0 1-1V4.835a1 1 0 1 0-2 0v.376c-2.674-2.725-6.817-3.724-10.523-2.299C3.402 4.864.882 10.548 2.816 15.585a9.78 9.78 0 0 0 5.169 5.432q.2.089.407.088a1 1 0 0 0 .409-1.913"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.998 7.945v3.11H8.615a1 1 0 0 0 0 2h3.383a1 1 0 0 0 1-1v-4.11a1 1 0 0 0-2 0M21.152 18.465h-.19a1 1 0 0 0-1.759 0h-.268l1.96-2.727a1 1 0 0 0-1.625-1.167l-3.097 4.31a1 1 0 0 0 .812 1.583h2.097v.27a1 1 0 0 0 2 0v-.27h.07a1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.203 19.715h-1.377c.15-.12.332-.248.548-.395.771-.525 1.829-1.246 1.829-2.665a2.484 2.484 0 0 0-4.97 0 1 1 0 0 0 2 0c0-.265.217-.48.486-.48.267 0 .484.215.484.48 0 .312-.227.517-.954 1.012-.85.58-2.016 1.373-2.016 3.048a1 1 0 0 0 1 1h2.97a1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForwardClockTimer24Bold;
