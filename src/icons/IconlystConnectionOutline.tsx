import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.408 2.38 1.084 3.106.67.72 1.659 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17m7.163.776c.199 0 .39.08.53.22l1.133 1.133A.75.75 0 0 1 13 8.225v2.91l1.974-.685a.48.48 0 0 0 .32-.45v-.932a.75.75 0 0 1 1.5 0V10c0 .842-.532 1.592-1.327 1.868L13 12.724v2.117a1.813 1.813 0 1 1-1.5 0v-.43l-2.327-.56a2 2 0 0 1-1.53-1.943v-.9a.75.75 0 0 1 1.5 0v.9c0 .23.157.43.38.484l1.977.475V8.225a.75.75 0 0 1-.913-1.176l1.133-1.133a.75.75 0 0 1 .53-.22m0 10.484a.312.312 0 0 0 0 .624.311.311 0 0 0 0-.624"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectionOutline;
