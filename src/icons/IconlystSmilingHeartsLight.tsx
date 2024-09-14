import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingHeartsLight = ({
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
      d="M20.922 18.639c.226-.706-.038-1.512-.779-1.75A1.26 1.26 0 0 0 19 17.08a1.27 1.27 0 0 0-1.142-.193c-.74.239-1.006 1.045-.78 1.75.352 1.118 1.922 1.98 1.922 1.98s1.558-.849 1.922-1.98M20.902 5.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.402-2.474M6.902 17.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.402-2.474"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.117 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M13.586 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.12 14.29c.702.912 1.734 1.48 2.88 1.48s2.18-.568 2.88-1.48M17.342 19.244A8.96 8.96 0 0 1 12 21a8.97 8.97 0 0 1-6.02-2.309M19.564 7.121A8.96 8.96 0 0 1 21 12.001a8.96 8.96 0 0 1-1.33 4.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.05 3.96A8.96 8.96 0 0 0 12 3a9 9 0 0 0-9 9c0 1.039.176 2.037.5 2.965"
    />
  </Svg>
);
export default IconlystSmilingHeartsLight;
