import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeHighBroken = ({
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
      d="M2.393 9.13c.117-.637.33-1.183.717-1.506.87-.724 1.389-.538 2.971-.655.424 0 .921-.12 1.282-.345l3.101-1.939c1.861-1.163 4.134.233 4.266 2.401a68 68 0 0 1 0 9.828c-.114 2.165-2.405 3.564-4.266 2.401l-3.101-1.938c-.36-.226-.851-.345-1.276-.345-1.59-.12-2.1.067-2.977-.656-.781-.654-.856-2.23-.86-3.62M18.744 8.512v6.976M22.25 6.23v11.538"
    />
  </Svg>
);
export default IconlystVolumeHighBroken;
