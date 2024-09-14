import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave2Outline = ({
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
      d="M5.087 4.92C4.41 5.646 4 6.709 4 8.026v7.948c0 1.317.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V10.08c0-.431-.167-.845-.465-1.155L15.56 4.263a1.67 1.67 0 0 0-1.205-.513H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 3.897C4.975 2.84 6.377 2.25 8.032 2.25h6.323c.863 0 1.689.352 2.287.974l4.474 4.661c.567.59.884 1.377.884 2.195v5.893c0 1.628-.509 3.078-1.487 4.13-.984 1.056-2.387 1.647-4.046 1.647H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.026c0-1.628.511-3.079 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.14 16.592c-.598 0-1.083.485-1.083 1.084V21a.75.75 0 0 1-1.5 0v-3.324a2.583 2.583 0 0 1 2.583-2.584h4.222a2.584 2.584 0 0 1 2.583 2.584V21a.75.75 0 0 1-1.5 0v-3.324c0-.6-.485-1.084-1.083-1.084zM8.307 2.25a.75.75 0 0 1 .75.75v4.65a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSave2Outline;
