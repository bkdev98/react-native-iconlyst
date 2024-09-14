import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLight = ({
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
      d="M7.782 5.229h8.435c2.948 0 4.783 2.08 4.783 5.026v4.055c0 2.946-1.835 5.027-4.784 5.027H7.782C4.834 19.337 3 17.256 3 14.31v-4.056C3 7.31 4.843 5.23 7.782 5.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.226v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M15.904 12.226v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0M8.094 12.226v-.064zm-.26-.014a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordLight;
