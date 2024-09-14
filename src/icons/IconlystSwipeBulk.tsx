import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeBulk = ({
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
      d="M9.984 5.932V4.35H6.615l.231-.233a.79.79 0 1 0-1.118-1.118L4.144 4.58a.8.8 0 0 0-.17.862q.06.146.17.257l1.584 1.583a.79.79 0 0 0 .559.232.79.79 0 0 0 .56-1.351l-.232-.232zm3.55-1.555.023 1.53.047.012q.035.012.072.013h3.366l-.231.232a.79.79 0 1 0 1.119 1.12L19.513 5.7a.8.8 0 0 0 .171-.863.8.8 0 0 0-.17-.256L17.93 2.998a.79.79 0 1 0-1.119 1.118l.231.233h-3.366a.3.3 0 0 0-.091.016q-.025.008-.052.012"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m13.558 5.906.046 2.93c2.482.237 6.076.108 7.08 2.818 1.01 2.726.016 6.335-1.754 8.105-2.259 2.258-8.57 2.43-10.637-.139-1.312-1.63-2.33-3.61-2.973-5.383-.344-.951.161-1.977 1.106-2.34a1.94 1.94 0 0 1 2.29.71l1.27 1.842V4.273a1.774 1.774 0 0 1 3.547-.026l.002.129z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwipeBulk;
