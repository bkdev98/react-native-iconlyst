import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagPlusBold = ({
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
      d="M11.443 12.948a4.334 4.334 0 0 1-4.33-4.33.75.75 0 0 1 1.5 0c0 1.56 1.27 2.83 2.83 2.83s2.83-1.27 2.83-2.83a.75.75 0 0 1 1.5 0 4.334 4.334 0 0 1-4.33 4.33m8.956-.09a.53.53 0 0 0 .545-.518V7.824c0-3.305-2.123-5.526-5.283-5.526H7.226c-3.16 0-5.282 2.22-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h4.839a.53.53 0 0 0 .518-.549c-.08-4.251 3.54-7.944 7.816-7.891M21.306 17.859h-1.593v-1.594a.75.75 0 0 0-1.5 0v1.593H16.62a.75.75 0 0 0 0 1.5h1.594v1.593a.75.75 0 0 0 1.5 0v-1.593h1.593a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagPlusBold;
