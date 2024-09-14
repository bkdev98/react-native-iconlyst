import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrameBulk = ({
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
      d="m21.947 13.282-.697-1.395V5.255c0-.535-.208-1.038-.587-1.415a2 2 0 0 0-1.413-.585h-6.632l-1.395-.697A.5.5 0 0 0 11 2.505H5c-.534 0-1.036.208-1.413.585C3.208 3.467 3 3.97 3 4.505v6q0 .117.052.224l.698 1.394v6.632c0 .536.21 1.038.587 1.414.378.378.88.586 1.413.586h6.631l1.395.697a.5.5 0 0 0 .224.053h6a2 2 0 0 0 1.413-.586A1.98 1.98 0 0 0 22 19.505v-6a.5.5 0 0 0-.053-.223"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.708 15.563h5.583a.77.77 0 0 0 .771-.77V9.213a.77.77 0 0 0-.77-.77H9.707a.77.77 0 0 0-.77.77v5.578a.77.77 0 0 0 .77.771"
    />
  </Svg>
);
export default IconlystFrameBulk;
