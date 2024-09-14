import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterSquareOutline = ({
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
      d="M7.083 8.5c0-1.271 1.065-2.25 2.313-2.25 1.247 0 2.312.979 2.312 2.25v.082l1.01-1.384c.738-1.012 2.167-1.244 3.2-.55 1.052.708 1.323 2.124.572 3.154L14.887 12l1.602 2.198c.752 1.03.48 2.446-.57 3.153-1.034.695-2.463.463-3.201-.549l-1.01-1.384v.082c0 1.271-1.065 2.25-2.312 2.25-1.248 0-2.313-.979-2.313-2.25zm2.313-.75c-.478 0-.813.364-.813.75v7c0 .386.335.75.813.75s.812-.364.812-.75v-2.383a.75.75 0 0 1 1.356-.441l2.366 3.242a.855.855 0 0 0 1.152.188.71.71 0 0 0 .196-1.025l-1.926-2.639a.75.75 0 0 1 0-.884l1.926-2.64a.713.713 0 0 0-.197-1.024.855.855 0 0 0-1.151.188l-2.366 3.242a.75.75 0 0 1-1.356-.441V8.5c0-.386-.334-.75-.812-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKickstarterSquareOutline;
