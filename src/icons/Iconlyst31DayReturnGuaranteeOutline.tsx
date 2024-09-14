import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst31DayReturnGuaranteeOutline = ({
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
      d="M8.188 9.195a.75.75 0 0 1 .75-.75h3.022a.75.75 0 0 1 .583 1.221l-1.038 1.287a2.481 2.481 0 1 1-3.039 3.878.75.75 0 1 1 1.063-1.059.981.981 0 1 0 .695-1.675.75.75 0 0 1-.584-1.221l.75-.93H8.938a.75.75 0 0 1-.75-.75M15.063 8.445a.75.75 0 0 1 .75.75v5.411a.75.75 0 0 1-1.5 0v-5.41a.75.75 0 0 1 .75-.75M19.644 4.164a.75.75 0 0 1 .75.75l.002 2.232a.75.75 0 0 1-.75.751l-2.22.002a.75.75 0 1 1 0-1.5l1.47-.001-.002-1.483a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.811 3.739c4.48-2.779 10.343-1.454 13.2 2.945a.75.75 0 0 1-1.257.818A8.167 8.167 0 0 0 7.602 5.014a8.15 8.15 0 0 0-3.853 6.544.75.75 0 0 1-1.498-.074A9.65 9.65 0 0 1 6.81 3.74M7.326 16.85a.75.75 0 0 1-.75.752h-1.47l.001 1.484a.75.75 0 0 1-1.5.001l-.002-2.233a.75.75 0 0 1 .75-.75l2.22-.002a.75.75 0 0 1 .75.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.037 11.728a.75.75 0 0 1 .712.786 9.65 9.65 0 0 1-4.56 7.745 9.666 9.666 0 0 1-13.2-2.946.75.75 0 0 1 1.257-.817 8.166 8.166 0 0 0 11.152 2.488 8.15 8.15 0 0 0 3.853-6.544.75.75 0 0 1 .786-.713"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst31DayReturnGuaranteeOutline;
