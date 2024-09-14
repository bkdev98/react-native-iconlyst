import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewEditLight = ({
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
      d="M10.684 20.157H7.427C4.701 20.157 3 18.241 3 15.515v-7.35c0-2.726 1.7-4.651 4.427-4.651h7.79c2.736 0 4.426 1.925 4.426 4.65v1.953"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.618 20.325-.888.148a.994.994 0 0 1-1.152-1.086l.1-.916c.047-.442.232-.858.528-1.189l3.866-4.22a1.22 1.22 0 0 1 1.722-.066l.815.755c.493.457.523 1.227.066 1.721l-3.823 4.173c-.323.36-.758.6-1.234.68"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.002 9.064h16.642M3 14.652h8.43m2.699-2.699v-8.43m-5.59.004v16.63"
    />
  </Svg>
);
export default IconlystGalleryViewEditLight;