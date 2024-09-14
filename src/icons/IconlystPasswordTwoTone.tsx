import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.282 5.229h8.435c2.948 0 4.783 2.08 4.783 5.026v4.055c0 2.946-1.835 5.027-4.784 5.027H8.282c-2.948 0-4.782-2.081-4.782-5.026v-4.056C3.5 7.31 5.343 5.23 8.282 5.23"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 12.226v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M16.404 12.226v-.064zm-.26-.014c0-.144.118-.26.262-.26a.26.26 0 0 1 .26.26.26.26 0 1 1-.521 0M8.594 12.226v-.064zm-.26-.014a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordTwoTone;
