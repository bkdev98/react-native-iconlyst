import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageBookmarkLight = ({
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
      d="M20.856 11.893V7.922C20.856 5.038 19.06 3 16.173 3h-8.26C5.035 3 3.23 5.038 3.23 7.922v7.782c0 2.884 1.796 4.922 4.683 4.922h1.714M6.505 6.476h-.054m2.488 0h-.054m2.49 0h-.054M20.856 9.356H3.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.425 13.805c.974 0 1.65.395 1.65 1.385l.001 5.467q0 .09-.044.168a.343.343 0 0 1-.466.13l-2.273-1.285L14 20.956a.341.341 0 0 1-.509-.297v-5.535c0-.95.707-1.32 1.65-1.32z"
    />
  </Svg>
);
export default IconlystWebPageBookmarkLight;
