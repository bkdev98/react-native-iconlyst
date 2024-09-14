import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateBookAiOutline = ({
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
      d="M3.74 3.897C4.726 2.841 6.129 2.25 7.784 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.502 1.486 4.13v7.946c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H7.783c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.027c0-1.628.511-3.08 1.49-4.13M4.839 4.92C4.16 5.647 3.75 6.71 3.75 8.027v7.947c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V8.027c0-1.318-.409-2.381-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H7.783c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.635 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M13.869 15.495a.75.75 0 0 1-.704-.49l-.106-.289a3.22 3.22 0 0 0-1.904-1.906l-.288-.107a.75.75 0 0 1 0-1.406l.288-.107a3.22 3.22 0 0 0 1.904-1.906l.106-.289a.75.75 0 0 1 1.407 0l.107.289a3.22 3.22 0 0 0 1.903 1.906l.288.107a.75.75 0 0 1 0 1.406l-.288.107a3.22 3.22 0 0 0-1.903 1.906l-.107.289a.75.75 0 0 1-.703.49M14.942 12a4.7 4.7 0 0 1-1.073-1.074c-.298.413-.66.776-1.073 1.074.413.298.775.66 1.073 1.074.297-.413.66-.776 1.073-1.074M16.998 15.167a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGenerateBookAiOutline;
