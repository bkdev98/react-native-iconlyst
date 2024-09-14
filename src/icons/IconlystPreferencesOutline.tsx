import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPreferencesOutline = ({
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
      d="M10.251 6.407a2.441 2.441 0 0 0-.033 4.88h.016a2.44 2.44 0 0 0 2.325-1.689h4.397a.75.75 0 0 0 0-1.5h-4.399a2.44 2.44 0 0 0-2.306-1.691m-.025 3.38a.94.94 0 1 1 .949-.933v.002a.934.934 0 0 1-.938.931h-.012M17.705 15.17a2.441 2.441 0 0 1-4.762.732H8.544a.75.75 0 1 1 0-1.5h4.397a2.44 2.44 0 0 1 2.325-1.69h.016a2.44 2.44 0 0 1 2.423 2.458m-1.5-.01a.94.94 0 0 0-.93-.947h-.012a.934.934 0 0 0-.938.93v.003a.941.941 0 0 0 1.88.014"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.532 2.25c-1.655 0-3.057.591-4.042 1.647C3.511 4.947 3 6.398 3 8.027v7.947c0 1.627.508 3.078 1.487 4.128.983 1.057 2.386 1.648 4.045 1.648h8.434c1.66 0 3.063-.59 4.047-1.648.978-1.05 1.487-2.5 1.487-4.128V8.026c0-1.627-.509-3.078-1.487-4.128-.984-1.057-2.387-1.648-4.046-1.648zM4.5 8.026c0-1.316.41-2.38 1.087-3.106.672-.72 1.661-1.17 2.945-1.17h8.435c1.289 0 2.278.45 2.948 1.17C20.591 5.646 21 6.709 21 8.026v7.948c0 1.317-.409 2.38-1.085 3.106-.67.72-1.66 1.17-2.95 1.17H8.533c-1.289 0-2.277-.45-2.947-1.17-.676-.726-1.085-1.789-1.085-3.106z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPreferencesOutline;
