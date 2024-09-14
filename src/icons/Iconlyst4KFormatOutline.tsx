import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KFormatOutline = ({
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
      d="M3.824 3.897C4.81 2.841 6.211 2.25 7.866 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.866c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.921 4.92c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17H16.3c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.866c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.367 8.603c.31.1.52.388.52.713v3.397h.286a.75.75 0 0 1 0 1.5h-.287v.473a.75.75 0 0 1-1.5 0v-.473H7.154a.75.75 0 0 1-.609-1.188L9.528 8.88a.75.75 0 0 1 .838-.276m-.98 4.11v-1.07l-.77 1.07zM13.613 8.734a.75.75 0 0 1 .75.75v5.028a.75.75 0 0 1-1.5 0V9.484a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.587 9.186a.75.75 0 0 1-.093 1.057L15.398 12l2.096 1.759a.75.75 0 0 1-.964 1.149l-2.782-2.333a.75.75 0 0 1 0-1.15l2.782-2.332a.75.75 0 0 1 1.057.093"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4KFormatOutline;
