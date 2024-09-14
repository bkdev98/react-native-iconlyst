import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.076 2h3.385A2.55 2.55 0 0 1 22 4.56v3.415a2.55 2.55 0 0 1-2.539 2.56h-3.385a2.55 2.55 0 0 1-2.539-2.56V4.56A2.55 2.55 0 0 1 16.076 2"
        opacity={0.4}
      />
      <Path d="M7.924 13.466a2.55 2.55 0 0 1 2.539 2.56v3.414A2.55 2.55 0 0 1 7.924 22H4.54A2.55 2.55 0 0 1 2 19.44v-3.415a2.55 2.55 0 0 1 2.539-2.56zm11.537 0A2.55 2.55 0 0 1 22 16.026v3.414A2.55 2.55 0 0 1 19.461 22h-3.385a2.55 2.55 0 0 1-2.539-2.56v-3.415a2.55 2.55 0 0 1 2.539-2.56zM7.924 2a2.55 2.55 0 0 1 2.539 2.56v3.415a2.55 2.55 0 0 1-2.539 2.56H4.54A2.55 2.55 0 0 1 2 7.974V4.56A2.55 2.55 0 0 1 4.539 2z" />
    </G>
  </Svg>
);
export default IconlystCategoryBulk;
