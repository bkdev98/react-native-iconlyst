import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryAddPlusOutline = ({
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
      d="m14.857 2.253-6.993.016c-1.654.004-3.053.598-4.034 1.656-.976 1.051-1.483 2.502-1.48 4.129l.02 7.938c.003 1.626.514 3.074 1.494 4.121.986 1.054 2.388 1.64 4.046 1.637h.002l3.962-.02a.75.75 0 1 0-.007-1.5l-3.96.02c-1.287.003-2.277-.444-2.948-1.161-.676-.724-1.087-1.784-1.09-3.1L3.851 8.05c-.003-1.315.404-2.378 1.078-3.105.67-.721 1.656-1.173 2.939-1.176l.638-.001.008 5.919a.75.75 0 0 0 .984.711l2.616-.862 2.598.847a.75.75 0 0 0 .982-.716l-.014-5.916.613-.001c1.287-.003 2.276.443 2.947 1.16.677.724 1.088 1.785 1.091 3.101v.002l.019 3.62a.75.75 0 0 0 1.5-.007l-.019-3.618v-.002c-.004-1.625-.515-3.073-1.495-4.12-.986-1.053-2.388-1.64-4.046-1.636l-1.294.003a1 1 0 0 0-.14 0m-4.851 1.512.006 4.884 1.865-.614a.75.75 0 0 1 .467-.001l1.848.601-.012-4.88zm8.435 11.167a.75.75 0 0 1 .75.75v1.909H21.1a.75.75 0 1 1 0 1.5h-1.91V21a.75.75 0 0 1-1.5 0V19.09h-1.909a.75.75 0 0 1 0-1.5h1.91v-1.91a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryAddPlusOutline;
