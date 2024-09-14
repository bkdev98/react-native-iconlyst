import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosBold = ({
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
      d="M11.992 12.516h.004v-.004h-.004zM7.758 14.274c-1.053 1.253-1.434 2.7-1.088 4.301.334 1.55 1.238 2.69 2.649 3.41.646.331 1.34.485 2.07.523.44.023.595-.247.595-.557-.006-2.787-.004-5.575-.003-8.362 0-.358.007-.715.011-1.073-.451.032-.908.024-1.351.103-1.152.206-2.128.757-2.883 1.655"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.447 12.51h-8.363q-.46-.001-.92-.005c.224-.006.448-.01.671-.024a4.65 4.65 0 0 0 1.996-.587c1.113-.616 1.9-1.52 2.321-2.729.475-1.359.396-2.698-.279-3.96-.91-1.705-2.373-2.59-4.303-2.695-.389-.02-.57.16-.57.551v8.363q-.001.54-.004 1.077h-.003v.003h.003v.008h.001c.01.277.014.555.03.832.041.71.246 1.377.587 1.996.616 1.113 1.522 1.9 2.73 2.321 1.358.475 2.698.396 3.96-.279 1.704-.91 2.59-2.373 2.694-4.303.021-.389-.158-.57-.55-.57M10.235 8.267c-1.253-1.053-2.699-1.434-4.3-1.088-1.55.334-2.689 1.238-3.41 2.649-.332.646-.486 1.34-.524 2.07-.022.44.247.595.557.595 2.787-.006 5.575-.004 8.362-.003.358 0 .715.007 1.073.011-.032-.45-.024-.908-.103-1.351-.206-1.152-.757-2.128-1.655-2.883"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePhotosBold;
