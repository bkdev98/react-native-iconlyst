import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdate1Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.226 14.499a1 1 0 0 0-1.109-.036l-.916.569c-1.09-2.657-.572-5.842 1.557-7.987A7.34 7.34 0 0 1 13.27 4.99a1 1 0 1 0 .352-1.969 9.34 9.34 0 0 0-8.283 2.615C2.55 8.446 1.935 12.657 3.49 16.094l-1.016.63a1 1 0 0 0 .302 1.825l2.963.684a1.006 1.006 0 0 0 .756-.126 1 1 0 0 0 .444-.623l.681-2.946a1 1 0 0 0-.393-1.04M21.986 6.759a1 1 0 0 0-.761-.811l-2.962-.685a1 1 0 0 0-.755.126 1 1 0 0 0-.445.623l-.681 2.948a1 1 0 0 0 1.5 1.073l.918-.568c1.09 2.656.572 5.842-1.556 7.988a7.35 7.35 0 0 1-6.511 2.055.999.999 0 1 0-.351 1.968 9.348 9.348 0 0 0 8.282-2.614c2.788-2.81 3.402-7.023 1.847-10.46l1.016-.63a1 1 0 0 0 .459-1.013"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdate1Bold;
