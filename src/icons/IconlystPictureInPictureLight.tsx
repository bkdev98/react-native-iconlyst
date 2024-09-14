import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPictureInPictureLight = ({
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
      d="M8.616 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.616c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.834 5.081 5.677 3 8.616 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.21 11.219h-3.304c-1.15 0-1.873.815-1.873 1.968v2.14c0 1.155.718 1.97 1.873 1.97h3.304c1.155 0 1.874-.815 1.874-1.97v-2.14c0-1.153-.719-1.968-1.874-1.968"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPictureInPictureLight;
