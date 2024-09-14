import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeSquareOutline = ({
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
      d="M4.837 5.535c-.677.727-1.087 1.79-1.087 3.107v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.727 1.085-1.79 1.085-3.107V8.642c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17M3.74 4.513c.985-1.057 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648.978 1.05 1.487 2.501 1.487 4.129v7.947c0 1.627-.509 3.078-1.487 4.129-.985 1.056-2.387 1.647-4.047 1.647H7.782c-1.66 0-3.062-.59-4.045-1.647-.979-1.051-1.487-2.502-1.487-4.13V8.643c0-1.629.511-3.08 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 7.365a.75.75 0 0 1 .586.283l3.383 4.243a.75.75 0 0 1-.586 1.217h-.638l.797 1.38a.75.75 0 0 1-.65 1.125H9.108a.75.75 0 0 1-.65-1.125l.797-1.38h-.638a.75.75 0 0 1-.586-1.218l3.383-4.242A.75.75 0 0 1 12 7.365m-1.826 4.243h.38a.75.75 0 0 1 .65 1.125l-.797 1.38h3.186l-.796-1.38a.75.75 0 0 1 .649-1.125h.38L12 9.318z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 14.113a.75.75 0 0 1 .75.75v2.252a.75.75 0 0 1-1.5 0v-2.252a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeSquareOutline;
