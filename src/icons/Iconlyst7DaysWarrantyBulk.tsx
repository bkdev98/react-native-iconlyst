import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7DaysWarrantyBulk = ({
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
      d="m20.704 10.086-.699-.699a1.7 1.7 0 0 1-.494-1.198v-1c0-1.489-1.21-2.7-2.7-2.7H15.81c-.452 0-.877-.175-1.196-.492l-.71-.71a2.703 2.703 0 0 0-3.819.01l-.697.7a1.71 1.71 0 0 1-1.197.493H7.188a2.703 2.703 0 0 0-2.7 2.7v.997c0 .451-.176.877-.494 1.196l-.693.695-.02.02a2.703 2.703 0 0 0 .016 3.814l.7.7c.317.32.493.744.493 1.195v1.006a2.7 2.7 0 0 0 2.7 2.7h.997c.453 0 .878.175 1.196.492l.712.712c.526.52 1.214.78 1.901.78.695 0 1.39-.265 1.914-.795l.701-.699c.32-.319.744-.495 1.196-.495h1.006a2.703 2.703 0 0 0 2.7-2.695V15.81c0-.45.174-.876.491-1.195l.712-.712a2.7 2.7 0 0 0-.012-3.816"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.448 15.5 1.796-5.788a.75.75 0 0 0-.716-.972H9.88a.75.75 0 0 0 0 1.5h2.631l-1.495 4.815a.751.751 0 0 0 1.433.445"
    />
  </Svg>
);
export default Iconlyst7DaysWarrantyBulk;
