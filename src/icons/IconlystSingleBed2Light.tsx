import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBed2Light = ({
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
      d="M3 15.751c0-.849 0-1.273.085-1.623a3 3 0 0 1 2.205-2.205c.35-.085.774-.085 1.623-.085h10.174c.849 0 1.273 0 1.623.085a3 3 0 0 1 2.205 2.205c.085.35.085.774.085 1.623 0 .453 0 .68-.046.866a1.6 1.6 0 0 1-1.175 1.176c-.187.045-.413.045-.866.045H5.087c-.453 0-.68 0-.866-.045a1.6 1.6 0 0 1-1.176-1.176C3 16.43 3 16.204 3 15.751M18.786 19.4v-1.1m-13.571 0v1.1"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.786 11.838V6.76c0-.614 0-.922-.088-1.168a1.5 1.5 0 0 0-.904-.903c-.246-.089-.553-.089-1.168-.089H7.375c-.615 0-.922 0-1.168.089a1.5 1.5 0 0 0-.903.903c-.09.246-.09.554-.09 1.168v5.078"
    />
  </Svg>
);
export default IconlystSingleBed2Light;
