import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeatportSquareOutline = ({
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
      d="M17.14 9.357a.75.75 0 0 1 .96.45c.22.605.339 1.256.339 1.934 0 .81-.17 1.582-.477 2.28a.75.75 0 0 1-1.373-.602c.225-.513.35-1.08.35-1.678 0-.5-.088-.98-.249-1.423a.75.75 0 0 1 .45-.96M6.861 9.357a.75.75 0 0 1 .45.96c-.16.444-.248.923-.248 1.424 0 .598.125 1.165.35 1.678a.75.75 0 0 1-1.374.602 5.7 5.7 0 0 1-.476-2.28c0-.678.119-1.33.338-1.934a.75.75 0 0 1 .96-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.9 9.842a2.688 2.688 0 1 0-3.8 3.8.75.75 0 1 1-1.061 1.061 4.188 4.188 0 1 1 5.922 0 .75.75 0 1 1-1.06-1.06 2.69 2.69 0 0 0 0-3.801"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeatportSquareOutline;
