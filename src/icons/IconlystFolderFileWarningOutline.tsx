import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileWarningOutline = ({
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
      d="M5.097 4.888c-.572.718-.872 1.846-.872 3.454v7.313c0 1.53.449 2.653 1.19 3.393.742.74 1.869 1.19 3.404 1.19h7.297c1.53 0 2.654-.449 3.394-1.19s1.188-1.863 1.188-3.393v-.005L20.725 11v-.002c0-1.647-.305-2.71-.862-3.362-.534-.625-1.43-1.02-2.994-1.02h-2.655a2.9 2.9 0 0 1-2.309-1.155v-.001l-.856-1.139a1.39 1.39 0 0 0-1.112-.556H8.062c-1.526 0-2.422.442-2.965 1.124m-1.174-.934c.912-1.144 2.31-1.69 4.14-1.69h1.874c.91 0 1.766.429 2.31 1.155l.856 1.138c.264.349.676.556 1.114.557h2.652c1.801 0 3.207.46 4.135 1.547.904 1.06 1.22 2.563 1.22 4.338v.004l-.026 4.652v.002c0 1.823-.54 3.365-1.627 4.452-1.088 1.088-2.63 1.628-4.456 1.628H8.82c-1.828 0-3.374-.54-4.463-1.627-1.09-1.087-1.631-2.63-1.631-4.455V8.342c0-1.743.316-3.28 1.198-4.388"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.473 9.463a.75.75 0 0 1 .75.75v3.013a.75.75 0 0 1-1.5 0v-3.013a.75.75 0 0 1 .75-.75m.004 5.755a.75.75 0 0 1 .75.75v.068a.75.75 0 0 1-1.5 0v-.068a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileWarningOutline;
