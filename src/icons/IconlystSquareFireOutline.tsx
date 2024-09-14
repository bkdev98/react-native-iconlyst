import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareFireOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.083 7.146a.75.75 0 0 1 .776-.05c1.3.68 2.46 1.657 3.15 3.086.663 1.298.732 2.817.24 4.093-.497 1.292-1.579 2.344-3.171 2.613-4.145.89-6.945-4.183-3.814-7.177l.02-.02c.128-.128.384-.385.59-.532a.75.75 0 0 1 1.184.54l.007.027q.02.076.067.21a7 7 0 0 0 .36.838c.109-.154.207-.395.275-.763.123-.663.089-1.482.001-2.154a.75.75 0 0 1 .315-.711m-1.029 2.536.001.004zm-1.056 1.449c-1.505 1.944.215 4.849 2.778 4.288l.038-.007c1.022-.169 1.706-.82 2.036-1.676.337-.875.295-1.953-.18-2.877l-.009-.018a4.8 4.8 0 0 0-1.316-1.646 7 7 0 0 1-.103 1.089c-.155.839-.572 1.883-1.671 2.178l-.067.014a.95.95 0 0 1-.746-.206 1.7 1.7 0 0 1-.316-.341 4.7 4.7 0 0 1-.444-.798"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareFireOutline;