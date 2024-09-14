import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPicasaSquareOutline = ({
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
      d="M9.234 10.595a.75.75 0 0 1 .945.481l2.174 6.683a.75.75 0 1 1-1.426.464l-2.174-6.682a.75.75 0 0 1 .481-.946M16.046 6.65a.75.75 0 0 1 .482.945l-2.247 6.923a.75.75 0 0 1-1.427-.463l2.247-6.923a.75.75 0 0 1 .945-.482"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.746a5.253 5.253 0 1 0 3.715 1.54l-.001-.001A5.25 5.25 0 0 0 12 6.746m4.775.478a6.753 6.753 0 1 0-9.55 9.55 6.753 6.753 0 0 0 9.55-9.55"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.683 14.29a.75.75 0 0 1 .75-.75h7.117a.75.75 0 0 1 0 1.5h-7.117a.75.75 0 0 1-.75-.75M12.607 9.024a.75.75 0 0 1-.166 1.048L6.67 14.26a.75.75 0 0 1-.881-1.214l5.77-4.188a.75.75 0 0 1 1.047.166"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.039 6.582a.75.75 0 0 1 1.048-.165l5.888 4.282a.75.75 0 0 1-.882 1.213L8.204 7.63a.75.75 0 0 1-.165-1.048"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPicasaSquareOutline;
