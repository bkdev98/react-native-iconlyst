import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookOldOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H14.08c-.69 0-1.25-.56-1.25-1.25v-4.31a.75.75 0 0 1 .75-.75h2.372v-1.622H13.58a.75.75 0 0 1-.75-.75v-2.342c0-.412.162-.795.445-1.082l.014-.013a1.56 1.56 0 0 1 1.071-.435h1.592V7.574H14.36c-.835 0-1.637.333-2.23.92a3.16 3.16 0 0 0-.922 2.232v2.342a.75.75 0 0 1-.75.75H8.866v1.621h1.592a.75.75 0 0 1 .75.75V20.5c0 .69-.56 1.25-1.25 1.25H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h1.926v-3.31H8.55c-.654 0-1.184-.53-1.184-1.184V13.5c0-.654.53-1.183 1.184-1.183h1.158v-1.592c0-1.237.49-2.418 1.362-3.293l.003-.003a4.67 4.67 0 0 1 3.287-1.356h1.908c.654 0 1.184.53 1.184 1.183v2.255c0 .654-.53 1.184-1.184 1.184H14.36q0 0-.01.003l-.015.008-.003.006-.002.013v1.592h1.938c.654 0 1.184.53 1.184 1.183v2.255c0 .654-.53 1.183-1.184 1.183H14.33v3.311h1.886c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookOldOutline;
