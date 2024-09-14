import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLitecoinOutline = ({
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
      d="M10.266 2.798a.75.75 0 0 1 .722-.548h5.216a.75.75 0 0 1 .724.943L13.647 15.54h6.09a.75.75 0 0 1 .738.881l-.84 4.71a.75.75 0 0 1-.74.619H5.942a.75.75 0 0 1-.722-.953zm1.29.952-4.625 16.5h11.337l.572-3.21h-6.169a.75.75 0 0 1-.725-.943L15.228 3.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.453 10.595a.75.75 0 0 1-.593.88L4.907 13.998a.75.75 0 0 1-.287-1.472l12.954-2.524a.75.75 0 0 1 .88.593"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLitecoinOutline;
