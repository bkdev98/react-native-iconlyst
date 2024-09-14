import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableSquareOutline = ({
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
      d="m8.22 12.705-.564.565a2.27 2.27 0 1 0 3.21 3.21l.565-.564zm-1.625-.496.671-.672a1.35 1.35 0 0 1 1.908 0l3.425 3.425c.526.527.526 1.381 0 1.908l-.672.671a3.77 3.77 0 1 1-5.332-5.332"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.856 20.28a.75.75 0 0 1 0-1.06l2.736-2.737a.75.75 0 1 1 1.061 1.06L4.916 20.28a.75.75 0 0 1-1.06 0M12.568 8.358l.565-.565a2.27 2.27 0 1 1 3.21 3.211l-.564.565zm-.496-1.625-.671.671a1.35 1.35 0 0 0 0 1.907l3.425 3.425c.526.527 1.38.527 1.907 0l.671-.671a3.77 3.77 0 1 0-5.332-5.332"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.168 3.97a.75.75 0 0 1 0 1.06l-2.76 2.76a.75.75 0 1 1-1.06-1.06l2.76-2.76a.75.75 0 0 1 1.06 0M8.712 13.198a.75.75 0 0 1 0-1.06l1.323-1.324a.75.75 0 0 1 1.061 1.061l-1.323 1.323a.75.75 0 0 1-1.061 0m2.228 2.229a.75.75 0 0 1 0-1.061l1.324-1.323a.75.75 0 1 1 1.06 1.06l-1.323 1.324a.75.75 0 0 1-1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 4.034c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647.978 1.051 1.487 2.502 1.487 4.13v7.946c0 1.628-.509 3.078-1.487 4.13-.985 1.056-2.387 1.647-4.047 1.647H7.782c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.163c0-1.628.511-3.079 1.49-4.129m1.097 1.023c-.677.726-1.087 1.79-1.087 3.106v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.163c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectingCableSquareOutline;
