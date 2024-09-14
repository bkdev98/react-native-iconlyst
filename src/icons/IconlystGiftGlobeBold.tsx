import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.807 19.092a.5.5 0 0 0-.425-.236H7.625a.5.5 0 0 0-.422.232l-.043.068c-.56.88-.85 1.32-.82 1.81.03.44.25.85.62 1.11.39.29.92.29 1.96.29h6.16c1.05 0 1.57 0 1.97-.29.36-.26.58-.67.61-1.12.03-.48-.25-.92-.82-1.81zM13.947 9.902H12.75v4.04h1.196c.562 0 .646-.5.646-.796v-2.448c0-.297-.084-.796-.646-.796M9.407 10.698v2.448c0 .297.083.796.643.796h1.2v-4.04h-1.2c-.56 0-.643.499-.643.796"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.093 13.145c0 1.331-.902 2.296-2.146 2.296H10.05c-1.262 0-2.143-.944-2.143-2.296v-2.448c0-1.35.881-2.296 2.143-2.296h.141l-.535-.536a.749.749 0 1 1 1.06-1.06L12 8.09l1.285-1.285a.75.75 0 0 1 1.061 1.06l-.536.536h.137c1.263 0 2.146.945 2.146 2.296zM12 2.865c-4.6 0-8.34 3.74-8.34 8.34a8.32 8.32 0 0 0 3.167 6.548.5.5 0 0 0 .301.102h9.744a.5.5 0 0 0 .301-.102 8.32 8.32 0 0 0 3.167-6.548c0-4.6-3.74-8.34-8.34-8.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftGlobeBold;
