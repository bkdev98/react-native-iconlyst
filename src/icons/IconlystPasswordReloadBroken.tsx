import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadBroken = ({
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
      d="M11.924 17.598H8.032c-2.948 0-4.782-2.08-4.782-5.026V8.517c0-2.945 1.843-5.027 4.782-5.027h.852M21.25 10.757V8.52c0-2.945-1.835-5.027-4.783-5.027h-4.218M21.126 19.587a3.258 3.258 0 1 1 .124-3.149"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.447 16.436h1.803v-1.793M12.25 10.5v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M16.154 10.5v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0M8.344 10.5v-.064m-.26.05a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordReloadBroken;
