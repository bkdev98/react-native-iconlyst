import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterCloseOutline = ({
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
      d="M7.744 13.815a.75.75 0 0 1 .75.75v3.747c0 .727.59 1.316 1.326 1.316H14.8c.693 0 1.26-.531 1.31-1.201a.75.75 0 0 1 1.495.112 2.81 2.81 0 0 1-2.805 2.59H9.82a2.82 2.82 0 0 1-2.826-2.817v-3.748a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.101 6.734a.75.75 0 0 1-.402.982 2.57 2.57 0 0 0-1.588 2.367v3.989c0 1.41 1.14 2.55 2.55 2.55H7.71a.75.75 0 1 1 0 1.5H6.662a4.05 4.05 0 0 1-4.05-4.05v-3.99a4.07 4.07 0 0 1 2.508-3.75.75.75 0 0 1 .981.402"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.127 14.565a.75.75 0 0 1 .75-.75h6.065a.75.75 0 1 1 0 1.5H6.877a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 4.337a.75.75 0 0 1 1.06 0L19.744 20.3a.75.75 0 1 1-1.06 1.06L2.72 5.399a.75.75 0 0 1 0-1.061M14.426 10.334a.75.75 0 0 1 .75-.75h1.69a.75.75 0 0 1 0 1.5h-1.69a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.237 6.783a.75.75 0 0 1 .75-.75h6.954c2.238 0 4.06 1.82 4.06 4.052v3.989c0 1.21-.54 2.299-1.385 3.034a.75.75 0 1 1-.985-1.131 2.52 2.52 0 0 0 .87-1.903v-3.99c0-1.4-1.149-2.55-2.56-2.55h-6.954a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.82 3.92c-.533 0-.989.308-1.2.758a.75.75 0 0 1-1.358-.636A2.82 2.82 0 0 1 9.82 2.42h4.983a2.817 2.817 0 0 1 2.816 2.817v1.547a.75.75 0 0 1-1.5 0V5.237c0-.73-.593-1.317-1.316-1.317z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPrinterCloseOutline;
