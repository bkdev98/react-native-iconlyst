import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareCloudBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.26 11.3a.75.75 0 0 1-.742-.75c0-.4-.36-2.019-2.017-2.019s-2.017 1.618-2.017 2.018a.75.75 0 0 1-.744.75c-.761.007-1.575.428-1.575 1.59 0 .623.367 1.192.935 1.45.185.073.43.125.63.125h5.536c.099 0 .362-.014.667-.136.536-.243.903-.814.903-1.439 0-1.162-.813-1.583-1.575-1.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.521 15.708c-.422.17-.857.256-1.255.256H9.731a3.3 3.3 0 0 1-1.221-.247 3.1 3.1 0 0 1-1.845-2.828c0-1.543.974-2.727 2.396-3.02.29-1.325 1.403-2.838 3.439-2.838s3.15 1.513 3.44 2.838c1.422.293 2.396 1.477 2.396 3.02 0 1.214-.712 2.32-1.815 2.819M16.717 2H8.283C5.123 2 3 4.221 3 7.526v7.948C3 18.779 5.123 21 8.283 21h8.433C19.877 21 22 18.779 22 15.474V7.526C22 4.221 19.877 2 16.717 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareCloudBold;
