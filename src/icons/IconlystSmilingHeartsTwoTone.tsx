import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingHeartsTwoTone = ({
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
      d="M21.422 18.639c.226-.706-.038-1.512-.779-1.75a1.26 1.26 0 0 0-1.143.192 1.27 1.27 0 0 0-1.142-.193c-.74.239-1.006 1.045-.78 1.75.352 1.118 1.922 1.98 1.922 1.98s1.558-.849 1.922-1.98M21.402 5.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188C17.038 6.66 19 7.737 19 7.737s1.948-1.06 2.402-2.474M7.402 17.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188C3.038 18.66 5 19.737 5 19.737s1.948-1.06 2.402-2.474"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.617 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M14.086 9.81c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.62 14.29c.702.912 1.734 1.48 2.88 1.48s2.18-.568 2.88-1.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.842 19.244A8.96 8.96 0 0 1 12.5 21a8.97 8.97 0 0 1-6.02-2.309M20.064 7.121a8.96 8.96 0 0 1 1.436 4.88 8.96 8.96 0 0 1-1.33 4.712M16.55 3.96A8.96 8.96 0 0 0 12.5 3a9 9 0 0 0-9 9c0 1.039.176 2.037.5 2.965"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSmilingHeartsTwoTone;
