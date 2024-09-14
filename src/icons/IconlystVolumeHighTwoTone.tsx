import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeHighTwoTone = ({
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
      d="M6.331 6.968c.424 0 .921-.12 1.282-.345l3.101-1.939c1.862-1.163 4.134.233 4.266 2.401a68 68 0 0 1 0 9.828c-.114 2.165-2.404 3.564-4.266 2.401l-3.101-1.938c-.36-.226-.851-.346-1.276-.346-1.59-.119-2.1.068-2.977-.655C2.432 15.598 2.5 13.522 2.5 12s-.07-3.599.859-4.376c.87-.724 1.389-.538 2.971-.655"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.994 8.512v6.976M22.5 6.23v11.538"
    />
  </Svg>
);
export default IconlystVolumeHighTwoTone;
