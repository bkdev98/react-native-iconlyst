import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCraftAppSquareOutline = ({
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
      d="M9.471 6.688a5.8 5.8 0 0 1 2.2-.438.75.75 0 0 1 0 1.5 4.25 4.25 0 1 0 0 8.5.75.75 0 0 1 0 1.5 5.75 5.75 0 0 1-2.2-11.062"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.422 12a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.672 6.25h3.333c.662 0 1.291.274 1.71.74.433.482.637 1.173.387 1.892a5.8 5.8 0 0 1-1.364 2.184 5.8 5.8 0 0 1-4.066 1.684.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75m.75 1.5v3.432a4.3 4.3 0 0 0 2.255-1.177 4.3 4.3 0 0 0 1.008-1.616.37.37 0 0 0-.085-.396.8.8 0 0 0-.595-.243z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.672 17.75h3.333c.662 0 1.291-.274 1.71-.74a1.87 1.87 0 0 0 .387-1.892 5.8 5.8 0 0 0-1.364-2.184 5.8 5.8 0 0 0-4.066-1.684.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75m.75-1.5v-3.431a4.3 4.3 0 0 1 2.255 1.176c.452.452.797 1.01 1.008 1.616a.37.37 0 0 1-.085.396.8.8 0 0 1-.595.243z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCraftAppSquareOutline;
