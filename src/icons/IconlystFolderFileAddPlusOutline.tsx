import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileAddPlusOutline = ({
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
      d="M4.872 4.888C4.3 5.606 4 6.734 4 8.342v7.313c0 1.53.449 2.653 1.19 3.393.743.74 1.87 1.19 3.405 1.19h7.296c1.53 0 2.654-.449 3.394-1.19s1.189-1.863 1.189-3.393v-.005L20.5 11v-.002c0-1.647-.305-2.71-.862-3.362-.534-.625-1.43-1.02-2.993-1.02h-2.656a2.9 2.9 0 0 1-2.308-1.155v-.001l-.857-1.139a1.39 1.39 0 0 0-1.111-.556H7.838c-1.526 0-2.422.442-2.966 1.124m-1.173-.934c.911-1.144 2.309-1.69 4.139-1.69h1.875c.91 0 1.765.429 2.31 1.155l.856 1.138c.263.349.676.556 1.114.557h2.652c1.8 0 3.206.46 4.134 1.547C21.684 7.721 22 9.224 22 10.999v.004l-.026 4.652v.002c0 1.823-.541 3.365-1.628 4.452-1.087 1.088-2.63 1.628-4.455 1.628H8.595c-1.829 0-3.375-.54-4.464-1.627S2.5 17.48 2.5 15.655V8.342c0-1.743.316-3.28 1.199-4.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 10.148a.75.75 0 0 1 .75.75v1.547h1.546a.75.75 0 0 1 0 1.5h-1.546v1.548a.75.75 0 0 1-1.5 0v-1.548H9.953a.75.75 0 1 1 0-1.5h1.549v-1.547a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileAddPlusOutline;
