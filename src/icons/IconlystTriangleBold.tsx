import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleBold = ({
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
      d="m21.17 17.744-6.96-12.21a2.47 2.47 0 0 0-2.164-1.263h-.004c-.902 0-1.708.468-2.158 1.25L2.837 17.73a2.47 2.47 0 0 0 0 2.493 2.47 2.47 0 0 0 2.16 1.247h14.006c.9 0 1.705-.463 2.156-1.24a2.47 2.47 0 0 0 .011-2.488"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleBold;
