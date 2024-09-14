import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiredOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.613 16.363c0-2.077 1.578-3.855 3.637-3.855s3.638 1.778 3.638 3.855a.75.75 0 0 1-.75.75H9.363a.75.75 0 0 1-.75-.75m1.61-.75h4.055c-.29-.957-1.12-1.605-2.028-1.605s-1.737.648-2.027 1.605M7.08 8.089a.75.75 0 0 1 1.034-.241l1.8 1.118a.75.75 0 0 1 .002 1.273l-1.8 1.127a.75.75 0 1 1-.796-1.272l.78-.488-.778-.485A.75.75 0 0 1 7.08 8.09M17.42 8.089a.75.75 0 0 1-.24 1.032l-.78.485.781.488a.75.75 0 1 1-.796 1.272l-1.8-1.127a.75.75 0 0 1 .002-1.273l1.8-1.118a.75.75 0 0 1 1.033.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiredOutline;
