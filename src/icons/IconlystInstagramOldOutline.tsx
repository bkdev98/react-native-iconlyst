import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInstagramOldOutline = ({
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
      d="M12 9.148a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7m-4.35 2.85a4.35 4.35 0 1 1 8.7 0 4.35 4.35 0 0 1-8.7 0M7.399 2.25a.756.756 0 0 1 .757.748l.037 3.793a.744.744 0 0 1-.743.752.756.756 0 0 1-.757-.748l-.037-3.793A.744.744 0 0 1 7.4 2.25M11 2.25a.75.75 0 0 1 .75.75v2.88a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.372 10.11a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-5.878a.75.75 0 0 1-.75-.75M2.25 10.11A.75.75 0 0 1 3 9.36h5.8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M16.043 6.586a.957.957 0 1 1 1.914 0 .957.957 0 0 1-1.914 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInstagramOldOutline;
