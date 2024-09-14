import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatHouseLight = ({
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
      d="M18.427 9.82V7.878M5.217 7.875v10.88a.39.39 0 0 0 .388.388h2.332a.39.39 0 0 0 .388-.389v-5.276a3.603 3.603 0 0 1 3.363-3.652q.262-.01.523.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.896 9.616 13.31 3.61a2.396 2.396 0 0 0-2.972 0L2.75 9.616M18.488 20.792a30 30 0 0 0-.442-1.963c-.26-1.01.429-1.797 1.295-1.864 1.15-.09 1.564-1.512 1.35-2.158-.598.046-1.033-.244-1.328-.83-.513-1.015-1.405-1.215-2.43-1.136l-.13-1.669c-2.065 1.049-3.508 3.026-3.312 5.547l.06.762c.043.556-.346 1.044-.847 1.29-.75.37-1.458.808-1.981 1.618M17.584 14.99V15"
    />
  </Svg>
);
export default IconlystCatHouseLight;
