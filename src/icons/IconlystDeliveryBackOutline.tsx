import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBackOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.008 2.253-6.993.016c-1.654.004-3.054.598-4.035 1.656-.975 1.051-1.483 2.502-1.479 4.129l.018 7.938c.004 1.626.516 3.074 1.495 4.121.986 1.054 2.389 1.64 4.047 1.637h.002l3.961-.02a.75.75 0 1 0-.007-1.5l-3.96.02c-1.287.003-2.276-.444-2.947-1.161-.677-.724-1.088-1.784-1.09-3.1L4 8.05c-.003-1.315.404-2.378 1.079-3.105.669-.721 1.656-1.173 2.938-1.176l.64-.001.007 5.919a.75.75 0 0 0 .985.711l2.615-.862 2.598.847a.75.75 0 0 0 .983-.716l-.015-5.916.613-.001c1.287-.003 2.276.443 2.947 1.16.677.724 1.088 1.785 1.09 3.101v.004l.019 2.343a.75.75 0 0 0 1.5-.011l-.018-2.34v-.002c-.005-1.625-.516-3.072-1.496-4.119-.985-1.053-2.388-1.64-4.046-1.636l-1.293.003a1 1 0 0 0-.139 0m-4.85 1.512.006 4.884 1.865-.614a.75.75 0 0 1 .467-.001l1.847.601-.012-4.88zm7.348 10.483a.75.75 0 0 1 .75-.75h.972a2.693 2.693 0 1 1 0 5.388h-3.03l.636.636a.75.75 0 0 1-1.06 1.06l-1.809-1.808a.75.75 0 0 1-.355-.678.75.75 0 0 1 .22-.518l1.943-1.944a.75.75 0 0 1 1.06 1.06l-.69.692h3.085a1.194 1.194 0 0 0 0-2.388h-.972a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBackOutline;
