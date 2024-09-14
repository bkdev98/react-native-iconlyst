import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconlyProSquareOutline = ({
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
      d="M7.732 7.497c2.536-2.475 6.64-2.475 9.176 0a.75.75 0 0 1 0 1.073l-1.6 1.562a.75.75 0 0 1-1.048 0 2.796 2.796 0 0 0-3.88 0 2.594 2.594 0 0 0 0 3.736 2.796 2.796 0 0 0 3.88 0 .75.75 0 0 1 1.048 0l1.6 1.562a.75.75 0 0 1 0 1.073c-2.536 2.475-6.64 2.475-9.176 0a6.264 6.264 0 0 1 0-9.006m7.536.578c-1.958-1.393-4.722-1.228-6.488.495a4.764 4.764 0 0 0 0 6.86c1.766 1.723 4.53 1.889 6.488.495l-.53-.517c-1.648 1.127-3.932.972-5.406-.466a4.093 4.093 0 0 1 0-5.884c1.473-1.438 3.758-1.593 5.406-.466z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconlyProSquareOutline;
