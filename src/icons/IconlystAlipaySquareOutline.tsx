import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlipaySquareOutline = ({
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
      d="M7.291 8.875a.75.75 0 0 1 .75-.75h7.6a.75.75 0 0 1 0 1.5h-7.6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.64 6.125a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.89 11.375a.75.75 0 0 1 .75-.75h6.4a.75.75 0 0 1 .744.855 13 13 0 0 1-.832 2.97l6 2.743a.75.75 0 1 1-.623 1.364l-6.048-2.765c-.874 1.454-2.285 2.833-4.44 2.833-1.655 0-3.25-1.093-3.25-2.75 0-1.072.698-1.932 1.605-2.378.952-.468 1.986-.4 2.793-.302.89.107 1.763.333 2.59.649.255-.618.433-1.223.552-1.719h-5.49a.75.75 0 0 1-.75-.75m5.002 3.813a9.5 9.5 0 0 0-2.082-.504c-.785-.094-1.427-.1-1.952.159-.526.259-.767.665-.767 1.032 0 .543.604 1.25 1.75 1.25 1.339 0 2.323-.797 3.05-1.937"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlipaySquareOutline;
