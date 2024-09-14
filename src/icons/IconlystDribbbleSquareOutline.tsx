import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDribbbleSquareOutline = ({
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
      d="M6.176 12a6.068 6.068 0 1 1 12.135.002A6.068 6.068 0 0 1 6.176 12m6.067-4.566a4.568 4.568 0 1 0 .001 9.135 4.568 4.568 0 0 0-.001-9.135"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.934 6.418a.75.75 0 0 1 1.05.153c2.179 2.926 3.835 6.224 4.483 10.004a.75.75 0 0 1-1.479.253c-.6-3.494-2.134-6.576-4.208-9.36a.75.75 0 0 1 .154-1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.47 7.667a.75.75 0 0 1 .184 1.045c-1.18 1.682-3.14 2.541-4.963 2.98-1.84.442-3.67.488-4.76.444a.75.75 0 1 1 .061-1.5c1.002.042 2.685-.003 4.349-.403 1.68-.404 3.213-1.14 4.085-2.382a.75.75 0 0 1 1.044-.184M11.95 12.013c1.773-.7 3.87-.877 5.808-.301a.75.75 0 1 1-.428 1.438c-1.583-.471-3.334-.332-4.828.258-1.502.594-2.662 1.607-3.167 2.798a.75.75 0 0 1-1.38-.585c.701-1.658 2.23-2.91 3.996-3.608"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDribbbleSquareOutline;
