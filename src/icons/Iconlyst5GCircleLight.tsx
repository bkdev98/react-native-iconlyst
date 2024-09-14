import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 0 0-9-9 9 9 0 1 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.361 13.889c.285.434.762.723 1.323.723.897 0 1.625-.726 1.625-1.623 0-.725-.59-1.314-1.314-1.314H7.549l.263-2.318h2.272M16.223 9.644a2.6 2.6 0 0 0-1.026-.266c-1.365-.068-2.495 1.108-2.552 2.473-.062 1.501.935 2.742 2.42 2.742.87 0 1.49-.31 1.49-1.18v-1.43h-1.49"
    />
  </Svg>
);
export default Iconlyst5GCircleLight;
