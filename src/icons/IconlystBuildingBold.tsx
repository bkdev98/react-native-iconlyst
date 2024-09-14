import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingBold = ({
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
      d="M19.442 7.725a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.33.75.744zm-.75 5.233a.745.745 0 0 1-.75-.744v-.011a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m.75 3.734a.75.75 0 0 1-1.5 0c0-.414.336-.756.75-.756s.75.331.75.745zm-3.53-8.967a.75.75 0 0 1-1.5 0c0-.414.337-.755.75-.755.415 0 .75.33.75.744zm3.593-4.434h-5.223a2.625 2.625 0 0 0-2.624 2.62v2.013a.3.3 0 0 0 .112.234l3.72 2.971a2.97 2.97 0 0 1 1.145 2.296v5.315a3.54 3.54 0 0 1-.569 1.91c-.143.223.003.551.268.551h3.17a2.64 2.64 0 0 0 2.639-2.64V5.931a2.64 2.64 0 0 0-2.638-2.64"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.522 11.91-3.983-3.182a2.426 2.426 0 0 0-3.01.004L3.583 11.91a1.94 1.94 0 0 0-.783 1.55v5.273a2.6 2.6 0 0 0 2.6 2.577h2.888q.007-.001.007-.008V17.02a.75.75 0 0 1 1.5 0v4.282q0 .007.006.008h2.907c.683 0 1.326-.263 1.812-.742a2.58 2.58 0 0 0 .773-1.835v-5.292a1.98 1.98 0 0 0-.77-1.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingBold;
