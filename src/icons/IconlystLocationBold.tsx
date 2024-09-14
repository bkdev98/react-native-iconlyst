import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M11.993 2c4.663 0 8.507 3.718 8.507 8.318 0 2.318-.843 4.47-2.23 6.294a22 22 0 0 1-5.541 5.14c-.486.318-.925.342-1.459 0a21.6 21.6 0 0 1-5.54-5.14c-1.388-1.824-2.23-3.976-2.23-6.294C3.5 5.718 7.344 2 11.993 2m0 5.777a2.813 2.813 0 0 0-2.799 2.8c0 1.54 1.258 2.753 2.8 2.753s2.812-1.212 2.812-2.753c0-1.53-1.27-2.8-2.813-2.8"
    />
  </Svg>
);
export default IconlystLocationBold;
