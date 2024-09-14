import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartInformationBold = ({
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
      d="m18.302 14.158-3.808 3.28a.75.75 0 0 1-.984-.005l-2.104-1.85-2.887 2.139a.748.748 0 0 1-1.049-.156.75.75 0 0 1 .156-1.049l3.374-2.5a.75.75 0 0 1 .942.039l2.068 1.82 3.313-2.855a.75.75 0 1 1 .979 1.137M6.44 10.59a.75.75 0 0 1 .75-.75h3.945a.75.75 0 0 1 0 1.5H7.19a.75.75 0 0 1-.75-.75m.75-3.75h2.483a.75.75 0 0 1 0 1.5H7.19a.75.75 0 0 1 0-1.5m8.844-.56a2.416 2.416 0 0 1 2.416 2.409 2.42 2.42 0 0 1-2.416 2.421 2.415 2.415 0 1 1 0-4.83m.684-3.78H8.283C5.123 2.5 3 4.722 3 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.434c3.16 0 5.283-2.223 5.283-5.53V8.03c0-3.308-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.034 9.61a.92.92 0 0 0 .916-.921.914.914 0 0 0-.916-.909.913.913 0 0 0-.915.909c0 .508.41.921.915.921"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartInformationBold;
