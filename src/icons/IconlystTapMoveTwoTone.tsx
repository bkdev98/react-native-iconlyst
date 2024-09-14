import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapMoveTwoTone = ({
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
      d="M17.942 12.43c.88 2.374.015 5.515-1.526 7.056-1.967 1.966-7.462 2.116-9.26-.122-1.142-1.42-2.03-3.142-2.589-4.686-.3-.828.14-1.72.962-2.036a1.69 1.69 0 0 1 1.995.618l1.105 1.603V6.005a1.544 1.544 0 0 1 3.088-.024l.061 3.995c2.161.207 5.29.095 6.164 2.454"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.523 5.086-.833.834.833.834M16.773 8.004l.834.834.834-.834M16.773 3.834 17.607 3l.834.834M19.693 5.086l.834.834-.834.834M20.527 5.918H14.69M17.607 3v5.838"
    />
  </Svg>
);
export default IconlystTapMoveTwoTone;
