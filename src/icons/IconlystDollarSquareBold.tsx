import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquareBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.99 9.673a.89.89 0 0 0 0 1.78h.26v-1.78zM13.078 12.953h-.328v1.65h.328a.83.83 0 0 0 .825-.83.823.823 0 0 0-.825-.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.078 16.103h-.328v.25a.75.75 0 0 1-1.5 0v-.25h-.543a2.11 2.11 0 0 1-2.106-2.11.75.75 0 0 1 1.5 0c0 .336.272.61.606.61h.543v-1.65h-.261a2.394 2.394 0 0 1-2.389-2.39 2.393 2.393 0 0 1 2.389-2.39h.261v-.39a.75.75 0 0 1 1.5 0v.39h.546c1.161 0 2.106.947 2.106 2.11a.75.75 0 0 1-1.5 0 .61.61 0 0 0-.606-.61h-.546v1.78h.328a2.324 2.324 0 1 1 0 4.65m3.139-13.54H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarSquareBold;
