import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicSquareBold = ({
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
      d="M12.315 14.544a.75.75 0 0 1-.75.75 2.863 2.863 0 0 1-2.86-2.859.75.75 0 0 1 1.5 0c0 .75.61 1.359 1.36 1.359a.75.75 0 0 1 .75.75M12 12.419a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755m5.315 3.157a6.37 6.37 0 0 1-5.265 2.788 6.37 6.37 0 0 1-6.364-6.363 6.37 6.37 0 0 1 6.364-6.364c1.076 0 2.14.274 3.076.792a.75.75 0 1 1-.727 1.312 4.86 4.86 0 0 0-2.349-.604 4.87 4.87 0 0 0-4.864 4.864 4.865 4.865 0 0 0 8.889 2.731.75.75 0 1 1 1.24.844m1.101-12.927v7.847a.75.75 0 0 1-.396.662l-3.114 1.664a.75.75 0 1 1-.707-1.323l2.717-1.453V2.313c-.231-.025-.456-.063-.699-.063H7.782c-3.309 0-5.532 2.321-5.532 5.776v7.948c0 3.455 2.223 5.776 5.532 5.776h8.434c3.31 0 5.534-2.321 5.534-5.776V8.026c0-2.616-1.278-4.577-3.334-5.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicSquareBold;
