import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothCloseOutline = ({
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
      d="M9.522 2.328a.75.75 0 0 1 .788.076l2.397 1.83a.75.75 0 0 1-.91 1.192l-1.192-.91v5.978l1.12-.846a.75.75 0 1 1 .904 1.197l-1.558 1.177 4.873 3.897a.75.75 0 0 1 0 1.172l-5.62 4.495A.75.75 0 0 1 9.103 21v-7.431L5.636 16.34A.75.75 0 1 1 4.7 15.17l3.955-3.16L4.698 8.84a.75.75 0 1 1 .938-1.17l3.469 2.777V3a.75.75 0 0 1 .417-.672m1.083 11.242v5.87l3.67-2.935zm4.34-8.497a.75.75 0 0 1 1.06 0l1.399 1.399 1.399-1.4a.75.75 0 0 1 1.06 1.061l-1.398 1.4 1.399 1.398a.75.75 0 1 1-1.061 1.061l-1.4-1.399-1.398 1.4a.75.75 0 0 1-1.06-1.062l1.398-1.399-1.399-1.399a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothCloseOutline;
