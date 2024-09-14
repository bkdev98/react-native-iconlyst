import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBed2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.423 17.838h6.913c.452 0 .679 0 .866-.046a1.6 1.6 0 0 0 1.175-1.175c.046-.187.046-.413.046-.866 0-.849 0-1.273-.086-1.623a3 3 0 0 0-2.204-2.205c-.35-.085-.774-.085-1.623-.085H7.336c-.85 0-1.274 0-1.624.085a3 3 0 0 0-2.204 2.205c-.085.35-.085.774-.085 1.623 0 .452 0 .68.045.866a1.6 1.6 0 0 0 1.176 1.175c.187.046.413.046.866.046h3.456M5.637 11.827V6.76c0-.615 0-.922.088-1.168a1.5 1.5 0 0 1 .904-.904c.246-.088.553-.088 1.168-.088h4.615M19.208 11.827V6.76c0-.615 0-.922-.089-1.168a1.5 1.5 0 0 0-.903-.904c-.246-.088-.553-.088-1.168-.088h-2.337M19.208 19.4v-1.562M5.637 19.4v-1.562"
    />
  </Svg>
);
export default IconlystSingleBed2Broken;
