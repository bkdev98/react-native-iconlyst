import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingHeartsBroken = ({
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
      d="M21.172 18.639c.226-.706-.038-1.512-.779-1.75a1.26 1.26 0 0 0-1.143.192 1.27 1.27 0 0 0-1.142-.193c-.74.239-1.006 1.045-.78 1.75.352 1.118 1.922 1.98 1.922 1.98s1.558-.849 1.922-1.98M21.152 5.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.402-2.474M7.152 17.263c.282-.882-.047-1.89-.973-2.188a1.58 1.58 0 0 0-1.43.24 1.6 1.6 0 0 0-1.426-.24c-.926.298-1.258 1.306-.975 2.188.44 1.397 2.402 2.474 2.402 2.474s1.948-1.06 2.402-2.474"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.368 9.808c.264-.345.654-.56 1.087-.56s.824.215 1.088.56M13.836 9.808c.265-.345.655-.56 1.088-.56s.823.215 1.088.56M9.37 14.29c.702.912 1.734 1.48 2.88 1.48s2.18-.568 2.88-1.48M17.592 19.244a8.96 8.96 0 0 1-5.342 1.757 9 9 0 0 1-3.75-.817M19.814 7.12A8.96 8.96 0 0 1 21.25 12a9 9 0 0 1-.28 2.235M3.75 14.965A9 9 0 0 1 3.25 12a9 9 0 0 1 9.86-8.96"
    />
  </Svg>
);
export default IconlystSmilingHeartsBroken;
