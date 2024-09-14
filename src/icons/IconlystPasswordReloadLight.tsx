import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadLight = ({
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
      d="M21 10.714V8.476c0-2.945-1.835-5.027-4.783-5.027H7.782C4.843 3.45 3 5.531 3 8.476v4.055c0 2.945 1.834 5.026 4.782 5.026h3.892M20.876 19.546A3.258 3.258 0 1 1 21 16.397"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.197 16.395H21v-1.793M12 10.459v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M15.904 10.459v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.52 0M8.094 10.459v-.064zm-.26-.014a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordReloadLight;
