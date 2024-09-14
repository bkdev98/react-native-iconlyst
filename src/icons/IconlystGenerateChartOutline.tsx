import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateChartOutline = ({
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
      d="M3.74 3.897C4.726 2.841 6.129 2.25 7.784 2.25h3.732a.75.75 0 0 1 0 1.5H7.783c-1.284 0-2.273.45-2.945 1.17-.678.727-1.088 1.79-1.088 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V11.88a.75.75 0 0 1 1.5 0v4.094c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H7.783c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.126 13.81a.75.75 0 0 1-.01 1.061L14.54 17.4a.75.75 0 0 1-.94.09l-3.288-2.179-2.194 2.326a.75.75 0 1 1-1.091-1.029l2.627-2.786a.75.75 0 0 1 .96-.11l3.309 2.192 2.142-2.102a.75.75 0 0 1 1.06.01M10.823 11.474a.75.75 0 0 0 .75-.75V8.731a.75.75 0 0 0-1.5 0v1.993c0 .414.335.75.75.75m-3.763 0a.75.75 0 0 0 .75-.75V7.558a.75.75 0 1 0-1.5 0v3.166c0 .414.335.75.75.75M17.502 2.25a.75.75 0 0 0-.704.49l-.136.368a4.32 4.32 0 0 1-2.551 2.556l-.368.136a.75.75 0 0 0 0 1.406l.368.137a4.32 4.32 0 0 1 2.551 2.555l.136.368a.75.75 0 0 0 1.407 0l.137-.368a4.32 4.32 0 0 1 2.55-2.555l.369-.137a.75.75 0 0 0 0-1.406l-.368-.136a4.32 4.32 0 0 1-2.552-2.556l-.136-.368a.75.75 0 0 0-.703-.49m1.737 4.253a5.8 5.8 0 0 0-1.737 1.739 5.8 5.8 0 0 0-1.737-1.739 5.8 5.8 0 0 0 1.737-1.738 5.8 5.8 0 0 0 1.737 1.738"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGenerateChartOutline;
