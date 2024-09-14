import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquare2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.96c.984-1.056 2.386-1.647 4.042-1.647h8.435c1.659 0 3.062.59 4.046 1.647C21.49 5.011 22 6.462 22 8.09v7.947c0 1.627-.509 3.078-1.488 4.128-.984 1.057-2.387 1.648-4.046 1.648H8.032c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.486-2.5-1.486-4.128V8.089c0-1.628.511-3.078 1.49-4.129m1.097 1.023C4.41 5.709 4 6.773 4 8.089v7.948c0 1.318.408 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.089c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.324 10.558a2.39 2.39 0 0 1 2.388-2.388h1.357c1.163 0 2.105.944 2.105 2.107v.078a.75.75 0 1 1-1.5 0v-.079a.606.606 0 0 0-.605-.606h-1.357a.889.889 0 0 0 0 1.776h1.139a2.325 2.325 0 0 1 0 4.65h-1.42a2.106 2.106 0 0 1-2.106-2.107.75.75 0 0 1 1.5 0c0 .335.272.606.606.606h1.42a.825.825 0 0 0 0-1.649h-1.139a2.39 2.39 0 0 1-2.388-2.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.033a.75.75 0 0 1 .75.75v1.133a.75.75 0 0 1-1.5 0V7.783a.75.75 0 0 1 .75-.75m0 7.567a.75.75 0 0 1 .75.75v.999a.75.75 0 0 1-1.5 0v-.999a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarSquare2Outline;