import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoLineOutline = ({
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
      d="M3.822 3.897C4.806 2.841 6.209 2.25 7.868 2.25h8.434c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.5 1.486 4.128v7.948c0 1.628-.511 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H7.867c-1.659 0-3.062-.59-4.046-1.647-.978-1.051-1.487-2.502-1.487-4.13V8.027c0-1.627.509-3.078 1.488-4.129M4.919 4.92c-.676.726-1.085 1.788-1.085 3.106v7.948c0 1.318.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.284 0 2.273-.45 2.945-1.17.677-.726 1.087-1.79 1.087-3.106V8.026c0-1.318-.409-2.38-1.084-3.106-.67-.72-1.659-1.17-2.948-1.17H7.868c-1.289 0-2.278.45-2.949 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.766 16.277a.75.75 0 0 1 .75-.75h3.892a.75.75 0 1 1 0 1.5H7.516a.75.75 0 0 1-.75-.75M8.95 2.25A.75.75 0 0 1 9.7 3v3.962h4.766V3a.75.75 0 0 1 1.5 0v3.962h5.11a.75.75 0 0 1 0 1.5H3.09a.75.75 0 0 1 0-1.5H8.2V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoLineOutline;
