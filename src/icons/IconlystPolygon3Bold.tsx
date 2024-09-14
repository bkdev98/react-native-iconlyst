import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon3Bold = ({
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
      d="m20.692 8.128-3.953-3.953a2.75 2.75 0 0 0-1.948-.804H9.21c-.724 0-1.435.293-1.951.806L3.306 8.13a2.76 2.76 0 0 0-.806 1.951v5.58c0 .732.286 1.425.808 1.953l3.952 3.952a2.8 2.8 0 0 0 1.95.805h5.581c.732 0 1.424-.286 1.95-.806l3.953-3.953a2.76 2.76 0 0 0 .806-1.95v-5.58c0-.733-.287-1.426-.808-1.954"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolygon3Bold;
