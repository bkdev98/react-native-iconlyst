import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameBold = ({
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
      d="M14.791 15.565H9.208a.77.77 0 0 1-.77-.771V9.216a.77.77 0 0 1 .77-.771h5.583a.77.77 0 0 1 .771.77v5.579a.77.77 0 0 1-.77.77m6.656-2.283-.697-1.395V5.255c0-.535-.208-1.038-.587-1.415a2 2 0 0 0-1.413-.585h-6.632l-1.395-.697a.5.5 0 0 0-.223-.053h-6c-.534 0-1.036.208-1.413.585-.379.377-.587.88-.587 1.415v6q0 .117.052.224l.698 1.394v6.632c0 .536.21 1.038.587 1.414.378.378.88.586 1.413.586h6.631l1.395.697a.5.5 0 0 0 .224.053h6a2 2 0 0 0 1.413-.586 1.98 1.98 0 0 0 .587-1.414v-6a.5.5 0 0 0-.053-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFrameBold;
