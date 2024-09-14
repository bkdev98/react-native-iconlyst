import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSleepingBroken = ({
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
      d="M13.658 3.64h1.643l-1.643 2.285h1.643M17.385 5.199h2.423l-2.423 3.37h2.423M12.613 18.878h6.913c.452 0 .68 0 .866-.046a1.6 1.6 0 0 0 1.175-1.175c.046-.187.046-.413.046-.866 0-.849 0-1.273-.086-1.623a3 3 0 0 0-2.204-2.205c-.35-.085-.774-.085-1.623-.085H7.526c-.849 0-1.274 0-1.624.085a3 3 0 0 0-2.204 2.205c-.085.35-.085.774-.085 1.623 0 .452 0 .68.045.866a1.6 1.6 0 0 0 1.176 1.175c.187.046.413.046.866.046h3.457M19.41 20.404v-1.51M19.41 12.967v-1.51M5.827 20.404v-1.51M5.847 10.508V7.887c0-.615 0-.922.088-1.169a1.5 1.5 0 0 1 .904-.903c.246-.088.553-.088 1.168-.088h2.347"
    />
  </Svg>
);
export default IconlystBedSleepingBroken;
