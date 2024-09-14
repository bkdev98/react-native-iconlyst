import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTailwindSquareOutline = ({
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
      d="M10.139 8.742c.372-.02.722.027 1.066.136.39.124.735.316 1.05.511.134.083.272.173.406.26l.07.046a18 18 0 0 0 .512.323 2.54 2.54 0 0 0 2.755.041 3 3 0 0 1-.744-.16c-.412-.14-.791-.354-1.13-.564-.165-.102-.307-.194-.443-.282a17 17 0 0 0-.574-.36 2.69 2.69 0 0 0-2.357-.287 2.2 2.2 0 0 0-.611.336m3.77-1.316a4.18 4.18 0 0 0-3.672-.43c-1.168.425-2.123 1.412-2.312 2.84a.75.75 0 0 0 1.066.777c.92-.439 1.396-.42 1.761-.305.212.067.432.182.713.356.119.074.24.153.376.241a35 35 0 0 0 .596.378c2.364 1.522 5.655.238 6.005-2.426a.75.75 0 0 0-1.19-.7c-.345.257-.62.362-.84.397-.217.034-.432.009-.672-.073-.25-.086-.515-.229-.828-.422-.106-.066-.233-.148-.368-.235-.206-.132-.432-.277-.634-.398M7.772 14.047c.372-.02.723.027 1.066.136.391.123.736.316 1.05.51.135.084.273.174.407.261a20 20 0 0 0 .582.369 2.54 2.54 0 0 0 2.755.041 3 3 0 0 1-.744-.16c-.412-.14-.791-.355-1.13-.565a25 25 0 0 1-.443-.281 17 17 0 0 0-.575-.36 2.69 2.69 0 0 0-2.356-.288 2.2 2.2 0 0 0-.612.336m3.772-1.317a4.18 4.18 0 0 0-3.673-.43c-1.168.426-2.123 1.413-2.313 2.841a.75.75 0 0 0 1.067.776c.92-.438 1.395-.42 1.76-.304.213.067.433.181.713.356.12.074.242.153.377.241a33 33 0 0 0 .596.378c2.364 1.522 5.655.237 6.005-2.426a.75.75 0 0 0-1.19-.7c-.345.256-.62.361-.84.396-.217.035-.432.01-.672-.073-.25-.085-.515-.228-.828-.421-.106-.066-.233-.148-.369-.235a24 24 0 0 0-.633-.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTailwindSquareOutline;
