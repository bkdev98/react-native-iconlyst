import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMathCalculateOutline = ({
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
      d="M4.27 3.898C5.254 2.84 6.657 2.25 8.316 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.501 1.486 4.128v7.948c0 1.628-.511 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H8.316c-1.659 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128M5.368 4.92c-.676.726-1.085 1.789-1.085 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.283 0 2.272-.45 2.944-1.17.678-.727 1.088-1.79 1.088-3.106V8.026c0-1.317-.408-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.316c-1.288 0-2.277.45-2.948 1.17m3.618 1.688a.75.75 0 0 1 .75.75v1.054h1.054a.75.75 0 0 1 0 1.5H9.736v1.055a.75.75 0 0 1-1.5 0V9.912H7.18a.75.75 0 1 1 0-1.5h1.055V7.358a.75.75 0 0 1 .75-.75m8.845.765a.75.75 0 0 1 0 1.06l-2.552 2.551a.75.75 0 1 1-1.06-1.06l2.55-2.551a.75.75 0 0 1 1.062 0m-3.028 6.188a.75.75 0 0 1 1.06 0l.745.745.746-.745a.75.75 0 1 1 1.06 1.06l-.745.746.745.745a.75.75 0 0 1-1.06 1.06l-.746-.745-.745.746a.75.75 0 0 1-1.06-1.06l.745-.746-.745-.745a.75.75 0 0 1 0-1.061M6.96 15.343a.75.75 0 0 1 .75-.75h3.609a.75.75 0 0 1 0 1.5H7.71a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMathCalculateOutline;
