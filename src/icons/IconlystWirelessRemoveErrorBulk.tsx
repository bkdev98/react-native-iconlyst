import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessRemoveErrorBulk = ({
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
      d="M18.258 10.068c.844 0 1.642.192 2.356.534a.31.31 0 0 0 .373-.075l.107-.127a1.963 1.963 0 0 0-.126-2.644C15.8 2.643 8.3 2.642 3.132 7.756a1.96 1.96 0 0 0-.128 2.644l7.56 8.989c.37.439.91.69 1.485.69.574 0 1.115-.252 1.484-.69l.268-.32a.31.31 0 0 0 .011-.381 5.42 5.42 0 0 1-1.013-3.161 5.46 5.46 0 0 1 5.459-5.46"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.878 12.907a.75.75 0 0 0-1.061 0l-1.56 1.56-1.559-1.56a.75.75 0 0 0-1.06 1.061l1.56 1.56-1.56 1.558a.749.749 0 1 0 1.06 1.06l1.56-1.559 1.559 1.56a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-1.558-1.56 1.559-1.559a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessRemoveErrorBulk;
