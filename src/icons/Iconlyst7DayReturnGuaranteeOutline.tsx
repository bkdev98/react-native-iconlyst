import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7DayReturnGuaranteeOutline = ({
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
      d="M9.445 9.617a.75.75 0 0 1 .75-.75h3.611a.75.75 0 0 1 .717.973l-1.778 5.726a.75.75 0 0 1-1.433-.445l1.476-4.754h-2.593a.75.75 0 0 1-.75-.75M19.642 4.164a.75.75 0 0 1 .75.75l.002 2.232a.75.75 0 0 1-.75.751l-2.22.002a.75.75 0 0 1 0-1.5l1.47-.001-.002-1.483a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.811 3.739a9.666 9.666 0 0 1 13.2 2.945.75.75 0 0 1-1.257.817A8.166 8.166 0 0 0 7.602 5.014a8.15 8.15 0 0 0-3.853 6.544.75.75 0 0 1-1.498-.074A9.65 9.65 0 0 1 6.81 3.74M7.324 16.85a.75.75 0 0 1-.75.752h-1.47l.001 1.484a.75.75 0 0 1-1.5.001l-.001-2.233a.75.75 0 0 1 .749-.75l2.22-.002a.75.75 0 0 1 .75.749"
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
export default Iconlyst7DayReturnGuaranteeOutline;
