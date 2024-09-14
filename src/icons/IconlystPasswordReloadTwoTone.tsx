import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadTwoTone = ({
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
      d="M21.5 10.714V8.476c0-2.945-1.835-5.027-4.783-5.027H8.282C5.343 3.45 3.5 5.531 3.5 8.476v4.055c0 2.945 1.834 5.026 4.782 5.026h3.892"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.376 19.546a3.258 3.258 0 1 1 .124-3.149"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.697 16.395H21.5v-1.793M12.5 10.459v-.064zm-.26-.014a.26.26 0 1 1 .521 0 .26.26 0 1 1-.521 0M16.404 10.459v-.064zm-.26-.014c0-.144.118-.261.262-.261a.26.26 0 0 1 .26.26.26.26 0 1 1-.521 0M8.594 10.459v-.064zm-.26-.014a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0"
    />
  </Svg>
);
export default IconlystPasswordReloadTwoTone;
