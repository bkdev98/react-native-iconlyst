import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartGraphBold = ({
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
      d="M7.528 2.656h9.943A4.535 4.535 0 0 1 22 7.186v5.46a4.536 4.536 0 0 1-4.529 4.53h-2.014l.432 2.66h1.556a.75.75 0 0 1 0 1.5h-2.073a.7.7 0 0 1-.24 0H9.868a.7.7 0 0 1-.24 0H7.557a.75.75 0 0 1 0-1.5H9.11l.432-2.66H7.528A4.535 4.535 0 0 1 3 12.646v-5.46a4.534 4.534 0 0 1 4.528-4.53m3.534 14.52h2.876l.432 2.66h-3.74zm-2.932-5.17a.75.75 0 0 0 1.5 0v-4.17a.75.75 0 0 0-1.5 0zm3.815 0a.75.75 0 0 0 1.5 0v-1.96a.75.75 0 0 0-1.5 0zm3.425 0a.75.75 0 0 0 1.5 0v-3.32a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartGraphBold;
