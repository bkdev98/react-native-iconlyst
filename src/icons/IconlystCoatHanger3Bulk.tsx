import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3Bulk = ({
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
      d="M11.095 10.804a1 1 0 0 1 1.306-.541l7.567 3.133a3.29 3.29 0 0 1-1.26 6.33H5.29A3.29 3.29 0 0 1 2 16.436v-.087c0-1.321.791-2.514 2.008-3.03l5.301-2.243a1 1 0 0 1 .78 1.842l-5.3 2.243A1.29 1.29 0 0 0 4 16.349v.087c0 .713.578 1.29 1.29 1.29H18.71a1.29 1.29 0 0 0 .494-2.482l-7.567-3.133a1 1 0 0 1-.541-1.307"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.963 6.552a3.22 3.22 0 0 1 2.293-2.182c2.67-.646 4.847 2.062 3.659 4.552-.253.53-.832 1.128-1.36 1.404-.211.111-.362.224-.335.251.028.027.743.336 1.59.686.845.35 1.612.685 1.703.745.325.213.46.83.266 1.204-.179.344-.434.522-.792.555-.303.028-.537-.052-2.402-.822-1.247-.515-2.142-.925-2.259-1.035-.336-.317-.423-.967-.228-1.716.176-.676.633-1.241 1.217-1.506.447-.202.653-.378.787-.673.462-1.018-.472-2.019-1.514-1.62-.43.163-.652.473-.74 1.028-.107.688-.457 1.064-.99 1.063-.9 0-1.255-.768-.895-1.934M7.849 11.683a44 44 0 0 1 1.604-.649c1.282-.286 1.801 1.433.495 1.95-.273.138-.65.305-1.18.53-.96.41-1.463.604-1.788.643-.979.134-1.502-1.116-.749-1.709.235-.197.976-.484 1.618-.765"
    />
  </Svg>
);
export default IconlystCoatHanger3Bulk;
