import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordHideLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.399 10.914V8.75c0-2.847-1.773-4.86-4.623-4.86H7.623c-2.842 0-4.624 2.013-4.624 4.86v3.92c0 2.847 1.773 4.859 4.624 4.859h2.41M15.174 19.656a5.36 5.36 0 0 1-1.556-2.13 5.4 5.4 0 0 1 1.57-2.139 3.4 3.4 0 0 1 2.121-.774c.778.01 1.53.285 2.13.78M20.457 14.383l-6.294 6.294M21 17.527c-.784 1.82-2.17 2.913-3.69 2.913"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.7 10.662v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0M15.604 10.662v-.064zm-.26-.014a.261.261 0 1 1 .523 0 .261.261 0 0 1-.522 0M7.794 10.662v-.064zm-.26-.014a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystPasswordHideLight;
