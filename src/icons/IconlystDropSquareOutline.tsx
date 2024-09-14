import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.821 6.208c.554-.333 1.218-.19 1.622.22L12 8.012l1.558-1.584c.403-.41 1.067-.553 1.621-.22a6.34 6.34 0 0 1-3.191 11.77 6.34 6.34 0 0 1-3.167-11.77m.644 1.365A4.84 4.84 0 0 0 12 16.48a4.84 4.84 0 0 0 2.535-8.906l-2 2.034a.75.75 0 0 1-1.07 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.008 8.328a.75.75 0 0 1 .532.227l1.424 1.464v.002a2.904 2.904 0 0 1 .037 4.025 2.816 2.816 0 0 1-3.998 0 2.865 2.865 0 0 1 0-4.029l.002-.003 1.467-1.466a.75.75 0 0 1 .536-.22m-.94 2.745a1.365 1.365 0 0 0 0 1.918 1.315 1.315 0 0 0 1.86.008 1.404 1.404 0 0 0-.035-1.93l-.003-.002-.895-.92z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDropSquareOutline;
