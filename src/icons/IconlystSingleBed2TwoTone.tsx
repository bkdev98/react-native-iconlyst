import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSingleBed2TwoTone = ({
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
      d="M3.922 15.75c0-.848 0-1.272.085-1.622a3 3 0 0 1 2.205-2.205c.35-.085.774-.085 1.623-.085h10.174c.849 0 1.273 0 1.623.085a3 3 0 0 1 2.205 2.205c.085.35.085.774.085 1.623 0 .453 0 .679-.046.866a1.6 1.6 0 0 1-1.175 1.175c-.187.046-.413.046-.866.046H6.009c-.453 0-.68 0-.866-.046a1.6 1.6 0 0 1-1.176-1.175c-.045-.187-.045-.413-.045-.866"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.708 19.4v-1.1m-13.571 0v1.1M19.708 11.838V6.76c0-.614 0-.922-.088-1.168a1.5 1.5 0 0 0-.904-.903c-.246-.089-.553-.089-1.168-.089H8.297c-.615 0-.922 0-1.168.089a1.5 1.5 0 0 0-.904.903c-.088.246-.088.554-.088 1.168v5.078"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSingleBed2TwoTone;
