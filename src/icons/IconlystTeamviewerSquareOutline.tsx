import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeamviewerSquareOutline = ({
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
      d="M8.812 8.39c.813-.686 2.056-.108 2.056.955v.658h2.265v-.658c0-1.063 1.243-1.641 2.056-.956l3.149 2.656a1.25 1.25 0 0 1 0 1.91l-3.15 2.656c-.812.686-2.055.108-2.055-.955v-.659h-2.265v.659c0 1.063-1.243 1.64-2.056.955l.484-.573-.484.573-3.149-2.655a1.25 1.25 0 0 1 0-1.911zm.556 1.493L6.857 12l2.511 2.118v-.87a.75.75 0 0 1 .75-.75h3.765a.75.75 0 0 1 .75.75v.87L17.144 12l-2.511-2.117v.87a.75.75 0 0 1-.75.75h-3.765a.75.75 0 0 1-.75-.75zm.411-.347"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTeamviewerSquareOutline;
