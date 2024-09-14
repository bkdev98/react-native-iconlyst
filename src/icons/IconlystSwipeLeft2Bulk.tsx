import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeft2Bulk = ({
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
      d="M10.98 9.598 9.377 5.396A1.738 1.738 0 0 0 6.12 6.61l3.41 9.368-1.786-1.27a1.9 1.9 0 0 0-2.347.114c-.749.65-.87 1.764-.234 2.524 1.185 1.418 2.787 2.898 4.541 3.96 2.764 1.674 8.518-.6 9.84-3.436 1.037-2.223.743-5.878-1.1-8.05-1.833-2.158-5.1-.836-7.464-.222"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.875 4.865c.003.014 0 .026.002.04.009.035.033.061.046.095.02.05.04.099.07.145q.048.069.112.122c.024.025.04.056.068.077l1.793 1.326a.789.789 0 1 0 .938-1.271l-.344-.255c1.862-.24 3.3.03 4.442.836a.787.787 0 0 0 1.1-.19.79.79 0 0 0-.189-1.1c-1.46-1.03-3.223-1.393-5.442-1.126l.133-.18a.79.79 0 0 0-1.272-.938l-1.325 1.793c-.008.012-.01.027-.018.038-.028.045-.046.093-.066.143-.02.047-.041.091-.05.14-.01.045-.005.091-.006.139-.001.055-.003.11.008.166"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeLeft2Bulk;
