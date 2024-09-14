import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloseBold = ({
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
      d="m10.764 9.618 1.864-.615a.75.75 0 0 1 .467 0l1.848.6L14.93 2.8a.3.3 0 0 0-.3-.299l-3.574.009a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.344 12.243c0 .21-.211.356-.412.294a6.6 6.6 0 0 0-1.937-.287c-3.7 0-6.71 3.01-6.71 6.71 0 .742.122 1.45.344 2.112.068.202-.077.419-.29.419l-4.674.009h-.03c-1.56 0-2.88-.54-3.84-1.56-.93-1-1.42-2.36-1.42-3.95l-.02-7.94v-.02c0-3.29 2.11-5.5 5.26-5.51l.336-.005a.3.3 0 0 1 .304.3l.01 7.845c0 .24.12.46.31.6.13.1.28.15.44.15.08 0 .16-.02.24-.04l2.61-.87 2.6.85c.23.07.48.03.67-.11.2-.14.31-.37.31-.61l-.02-7.83a.3.3 0 0 1 .3-.3h.34c1.49 0 2.78.49 3.72 1.43.99.99 1.54 2.43 1.55 4.07z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.395 21.33a.75.75 0 0 1-.53-.22l-1.412-1.41-1.41 1.41a.751.751 0 0 1-1.062-1.061l1.411-1.41-1.41-1.408a.75.75 0 0 1 1.06-1.062l1.411 1.41 1.412-1.41a.751.751 0 0 1 1.06 1.061l-1.41 1.41 1.41 1.409a.751.751 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryCloseBold;
