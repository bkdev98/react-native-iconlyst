import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBold = ({
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
      d="M10.628 3.353a2.85 2.85 0 0 1 3.85 1.09l7.268 12.614c.16.377.23.683.25 1.001a2.76 2.76 0 0 1-.73 2.021c-.51.554-1.2.881-1.95.921H4.68c-.31-.019-.62-.09-.91-.198-1.45-.585-2.15-2.23-1.56-3.656L9.53 4.433a2.73 2.73 0 0 1 1.099-1.08m1.37 11.92c-.48 0-.88.396-.88.873 0 .474.4.872.88.872s.87-.398.87-.883a.867.867 0 0 0-.87-.862m0-6.183c-.48 0-.88.386-.88.862v2.804c0 .475.4.873.88.873s.87-.398.87-.873V9.952a.866.866 0 0 0-.87-.862"
    />
  </Svg>
);
export default IconlystDangerBold;
