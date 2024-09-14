import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarAppleTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 166 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <G opacity={0.4}>
        <Path d="M6.489 16.864a6.4 6.4 0 1 1 7.867-6.23v1.142" />
        <Path d="M6.542 3.57c-.108.468-.26 1.598 0 2.376M1.037 13.267c.424-.226 1.477-.664 2.295-.615M12.538 7.98c.378-.014 1.269-.129 1.807-.485M8.208 7.399c-.171.103-.553.386-.71.69M4.045 10.26c.2.003.674-.032.968-.205M8.017 11.505c-.045.195-.108.666 0 .99M10.34 8.906c-.045.195-.108.666 0 .99" />
      </G>
      <Path d="M151.054 21c-7.285-2.392-7.659-14.233 0-18 2.13 1.048 3.639 2.72 4.55 4.64" />
      <Path d="M151.054 21c-2.877-2.392-3.025-14.233 0-18 1.186 1.477 1.884 4.195 2.122 7.098" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m159.776 13.323 2.775.224-2.359 2.227a2 2 0 0 0-.592 1.826l.541 2.868-3.45-1.954-3.602 1.954.573-2.866a2 2 0 0 0-.578-1.837l-2.317-2.218 2.748-.224a2 2 0 0 0 1.549-.958l1.597-2.638 1.556 2.623c.331.558.912.92 1.559.973M156.659 14.265v.01M155.802 16.305v.01M157.887 16.305v.01"
    />
  </Svg>
);
export default IconlystStarAppleTwoTone;
