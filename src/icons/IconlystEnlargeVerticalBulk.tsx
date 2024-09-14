import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.999 21.25a1 1 0 0 1-.707-.293l-3.453-3.453a.999.999 0 1 1 1.414-1.414l2.746 2.746 2.747-2.746a.999.999 0 1 1 1.414 1.414l-3.454 3.453a1 1 0 0 1-.707.293M15.453 8.703a1 1 0 0 1-.707-.293L12 5.664 9.253 8.41A.999.999 0 1 1 7.84 6.996l3.453-3.453a1 1 0 0 1 1.414 0l3.454 3.453a.999.999 0 0 1-.707 1.707" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.665 13.25H4.335a1 1 0 0 1 0-2h15.33a1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeVerticalBulk;
