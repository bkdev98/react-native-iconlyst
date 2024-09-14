import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSaveOutline = ({
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
      d="M5.087 4.92C4.41 5.646 4 6.709 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.435c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.106V10.08c0-.43-.166-.845-.465-1.155L15.56 4.263a1.67 1.67 0 0 0-1.205-.513H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h6.323c.863 0 1.689.352 2.287.974l4.474 4.661c.568.59.884 1.377.884 2.195v5.894c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.873 8.1a.75.75 0 0 1 .75-.75h5.531a.75.75 0 0 1 0 1.5H8.623a.75.75 0 0 1-.75-.75M7.475 13.916c.65-.527 1.518-.709 2.423-.709H14.6c.905 0 1.772.182 2.423.709.68.55.997 1.37.997 2.358v4.666a.75.75 0 0 1-1.5 0v-4.666c0-.657-.197-.995-.44-1.192-.274-.22-.742-.375-1.48-.375H9.898c-.738 0-1.206.154-1.48.375-.243.197-.44.535-.44 1.192v4.666a.75.75 0 0 1-1.5 0v-4.666c0-.987.316-1.807.997-2.358"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSaveOutline;
