import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOutline = ({
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
      d="M4.622 4.888c-.572.718-.872 1.846-.872 3.454v7.313c0 1.53.449 2.653 1.19 3.393.743.74 1.87 1.19 3.405 1.19h7.296c1.53 0 2.654-.449 3.394-1.19s1.189-1.863 1.189-3.393v-.005L20.25 11v-.002c0-1.647-.305-2.71-.862-3.362-.534-.625-1.43-1.02-2.993-1.02h-2.656a2.9 2.9 0 0 1-2.308-1.155v-.001l-.857-1.139a1.39 1.39 0 0 0-1.111-.556H7.588c-1.526 0-2.422.442-2.966 1.124m-1.173-.934c.911-1.144 2.309-1.69 4.139-1.69h1.875c.91 0 1.765.429 2.31 1.155l.856 1.138c.263.349.676.556 1.114.557h2.652c1.8 0 3.206.46 4.134 1.547.905 1.06 1.221 2.563 1.221 4.338v.004l-.026 4.652v.002c0 1.823-.541 3.365-1.628 4.452-1.087 1.088-2.63 1.628-4.455 1.628H8.345c-1.829 0-3.375-.54-4.464-1.627S2.25 17.48 2.25 15.655V8.342c0-1.743.316-3.28 1.199-4.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.318 13.71a.75.75 0 0 1 .75-.75h17.737a.75.75 0 0 1 0 1.5H3.068a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.302 10.088c-.665.18-1.312.677-1.846 1.602L6.14 13.97a.75.75 0 1 1-1.3-.75l1.317-2.28c.68-1.179 1.616-1.994 2.755-2.3 1.139-.307 2.356-.07 3.532.609l4.571 2.639c.662.382 1.237.81 1.68 1.3a.75.75 0 0 1-1.115 1.004c-.304-.337-.739-.672-1.315-1.005l-4.57-2.639c-.922-.532-1.729-.638-2.393-.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileOutline;
