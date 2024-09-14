import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.244 12.389a.692.692 0 1 0-.002 1.384.692.692 0 0 0 .002-1.384m-2.193.693a2.192 2.192 0 1 1 4.386 0 2.193 2.193 0 1 1-4.386 0M18.072 12.226a.693.693 0 0 0-.694.693v.01a.69.69 0 0 0 .69.683h.003a.692.692 0 1 0 0-1.386m-2.194.693a2.193 2.193 0 1 1 0 .015v-.015m2.195 2.193h-.002v-.75l.004.75zM13.692 7.275a.692.692 0 1 0-.002 1.384.692.692 0 0 0 .002-1.384m-2.193.693a2.192 2.192 0 1 1 4.386 0 2.193 2.193 0 0 1-4.386 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.195 8.45a.75.75 0 0 1 .097 1.055l-2.495 3.002a.75.75 0 1 1-1.154-.959l2.496-3.002a.75.75 0 0 1 1.056-.097M14.187 8.45a.75.75 0 0 1 1.057.087l2.418 2.845a.75.75 0 1 1-1.143.971L14.1 9.508a.75.75 0 0 1 .086-1.057"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphChartOutline;
