import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingBulk = ({
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
      d="M11.658 5.911a2.625 2.625 0 0 1 2.624-2.62h5.223a2.64 2.64 0 0 1 2.638 2.64v12.63a2.64 2.64 0 0 1-2.638 2.64h-3.172c-.264 0-.41-.328-.267-.55.364-.565.565-1.22.569-1.911v-5.315a2.97 2.97 0 0 0-1.145-2.296l-3.72-2.97a.3.3 0 0 1-.112-.235z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.522 11.91-3.983-3.182a2.426 2.426 0 0 0-3.01.004L3.583 11.91a1.94 1.94 0 0 0-.783 1.55v5.273a2.6 2.6 0 0 0 2.6 2.577h2.888q.007-.001.007-.008V17.02a.75.75 0 0 1 1.5 0v4.282q0 .007.006.008h2.907c.683 0 1.326-.263 1.812-.742a2.58 2.58 0 0 0 .773-1.835v-5.292a1.98 1.98 0 0 0-.77-1.531"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.692 8.475a.75.75 0 0 0 .75-.75v-.011a.745.745 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75M17.942 12.214c0 .414.336.744.75.744s.75-.341.75-.755a.75.75 0 0 0-1.5 0zM18.692 17.442a.75.75 0 0 0 .75-.75v-.011a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.756c0 .414.336.75.75.75M15.163 8.475a.75.75 0 0 0 .75-.75v-.011a.745.745 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75"
    />
  </Svg>
);
export default IconlystBuildingBulk;
