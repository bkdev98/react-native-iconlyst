import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPDFBadgeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.932 3.676H6.066C3.335 3.676 1.5 5.595 1.5 8.45v7.102c0 2.856 1.835 4.774 4.566 4.774h11.865c2.733 0 4.569-1.918 4.569-4.774V8.45c0-2.856-1.836-4.775-4.568-4.775"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.129 10.305h1.901a.75.75 0 0 0 0-1.5h-2.651a.75.75 0 0 0-.75.75v4.895a.75.75 0 0 0 1.5 0v-1.291h1.493a.75.75 0 1 0 0-1.5h-1.493zM11.653 15.2c.842 0 1.666-.342 2.259-.936a3.17 3.17 0 0 0 .937-2.262c0-.855-.333-1.658-.935-2.26a3.22 3.22 0 0 0-2.261-.937h-1.224a.75.75 0 0 0-.75.75v4.895c0 .414.336.75.75.75zM5.72 13.58h.729a2.39 2.39 0 0 0 2.386-2.384 2.39 2.39 0 0 0-2.386-2.387H4.97a.75.75 0 0 0-.75.75v4.884a.75.75 0 0 0 1.5 0zm5.459-3.275h.474c.447 0 .884.18 1.2.498.32.319.496.745.496 1.199s-.175.88-.498 1.2a1.7 1.7 0 0 1-1.198.498h-.474zm-5.459.004h.729a.887.887 0 0 1 0 1.772H5.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPDFBadgeBulk;
