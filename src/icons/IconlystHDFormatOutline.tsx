import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDFormatOutline = ({
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
      d="M3.824 3.897C4.81 2.841 6.211 2.25 7.866 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.866c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.921 4.92c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17H16.3c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.866c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.934 9.3a.75.75 0 0 1 .75-.75h.899a3.448 3.448 0 0 1 0 6.896h-.9a.75.75 0 0 1-.75-.75zm1.5.75v3.896h.149a1.947 1.947 0 1 0 0-3.895zM7.39 8.55a.75.75 0 0 1 .75.75v1.948h2.098V9.302a.75.75 0 0 1 1.5 0v5.395a.75.75 0 0 1-1.5 0v-1.947H8.14v1.947a.75.75 0 0 1-1.5 0V9.3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDFormatOutline;