import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryAiLight = ({
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
      d="M10.684 20.157H7.427C4.701 20.157 3 18.24 3 15.515V8.163c0-2.726 1.7-4.651 4.427-4.651h7.79c2.736 0 4.426 1.925 4.426 4.65v4.209M3.002 9.064h16.642M3 14.652h3.04m8.089-7.841V3.523m-5.59.004v16.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.422 20.157-.126-.34a4.67 4.67 0 0 0-2.757-2.761l-.339-.126.339-.125a4.67 4.67 0 0 0 2.757-2.762l.126-.34.125.34a4.67 4.67 0 0 0 2.758 2.762l.339.125-.34.126a4.67 4.67 0 0 0-2.757 2.761zM12.453 13.704a1.77 1.77 0 0 0-1.177-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystGalleryAiLight;
