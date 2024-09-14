import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoltSquareOutline = ({
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
      d="M3.74 4.034c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647.978 1.051 1.487 2.502 1.487 4.13v7.946c0 1.628-.509 3.078-1.487 4.13-.985 1.056-2.387 1.647-4.047 1.647H7.782c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.163c0-1.628.511-3.079 1.49-4.129m1.097 1.023c-.677.726-1.087 1.79-1.087 3.106v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.163c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.42 7.507a.75.75 0 0 1 .223 1.037l-1.837 2.844h3.766a.75.75 0 0 1 .63 1.157l-2.588 4a.75.75 0 0 1-1.26-.816l1.84-2.841H9.428a.75.75 0 0 1-.63-1.157l2.584-4.001a.75.75 0 0 1 1.037-.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoltSquareOutline;
