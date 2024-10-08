import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscordBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.492 13.306q0-.029-.003-.056c-.028-.195-.038-.395-.094-.582-.21-.706-.647-1.213-1.389-1.363-.714-.143-1.293.13-1.72.709-.58.782-.525 1.947.116 2.68.69.787 1.81.808 2.522.04.373-.4.543-.883.568-1.428m6.646-.017q.001-.026-.002-.05c-.023-.17-.032-.343-.076-.507-.188-.7-.595-1.215-1.316-1.405-.637-.168-1.196.015-1.649.49-.745.78-.749 2.116-.017 2.908.72.777 1.855.762 2.542-.04.344-.4.5-.871.518-1.396m-.04 4.497c.176-.084.243-.33.085-.444-.116-.083-.209-.05-.426.042-3.168 1.348-6.338 1.334-9.508.009-.228-.096-.316-.134-.428-.062-.168.107-.103.367.077.454l1.04.506a.3.3 0 0 1 .123.43c-.285.45-.566.895-.856 1.333-.03.046-.164.06-.233.04A16.3 16.3 0 0 1 2.22 17.69a.4.4 0 0 1-.146-.26c-.329-3.63.44-7.017 2.281-10.163.703-1.201.701-1.222 2.2-1.698.787-.25 1.6-.422 2.398-.64.176-.046.264.006.334.165.088.197.22.377.287.58.081.242.205.299.456.263 1.375-.198 2.751-.168 4.125.013a.18.18 0 0 0 .18-.102c.128-.258.26-.515.382-.778.063-.138.141-.176.294-.147 1.29.244 2.536.619 3.731 1.16a.8.8 0 0 1 .318.269c1.413 2.11 2.366 4.404 2.752 6.92a17 17 0 0 1 .112 4.154.44.44 0 0 1-.168.28 16.2 16.2 0 0 1-4.707 2.375c-.083.026-.24.01-.276-.043-.288-.431-.563-.871-.845-1.32a.3.3 0 0 1 .124-.43z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscordBold;
