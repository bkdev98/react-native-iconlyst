import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailOutline = ({
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
      fillRule="evenodd"
      d="M12.484 2c1.133 0 7.079 2.041 7.865 2.828.656.656.646 1.186.6 3.729-.018 1.018-.043 2.405-.043 4.322 0 6.882-7.87 9.344-8.205 9.445a.73.73 0 0 1-.434 0c-.335-.101-8.205-2.563-8.205-9.445 0-1.92-.025-3.307-.043-4.325C4.01 8.1 4.003 7.711 4 7.374v-.381c.008-1.252.125-1.673.617-2.165C5.405 4.041 11.35 2 12.484 2m0 1.5c-.848 0-6.2 1.884-6.816 2.399-.119.119-.163.296-.168 1v.27c0 .343.007.784.018 1.357.019 1.026.044 2.421.044 4.353 0 5.201 5.722 7.51 6.92 7.935 1.199-.427 6.924-2.749 6.924-7.935 0-1.93.025-3.324.043-4.35.01-.573.017-1.015.018-1.359V6.9c-.006-.705-.053-.885-.18-1.011-.605-.505-5.955-2.389-6.803-2.389m-1.35 6.037 1.35 1.35 1.349-1.35a.749.749 0 1 1 1.06 1.06l-1.35 1.35 1.35 1.348a.749.749 0 1 1-1.06 1.06l-1.35-1.348-1.348 1.348a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.349-1.348-1.35-1.35a.749.749 0 1 1 1.06-1.06"
    />
  </Svg>
);
export default IconlystShieldFailOutline;
