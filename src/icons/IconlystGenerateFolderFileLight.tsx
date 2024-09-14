import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateFolderFileLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.741 7.232a2.2 2.2 0 0 1-.661-.106c-.603-.197-1.042-.722-1.246-1.322l-.466-1.365c-.205-.6-.643-1.126-1.246-1.322a2.2 2.2 0 0 0-.66-.104H7.587C4.232 3.013 3 4.99 3 8.341v7.313c0 3.355 1.981 5.333 5.344 5.333h7.297c3.355 0 5.332-1.978 5.332-5.333L21 12.366c0-3.422-1.242-5.134-4.606-5.134z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.659V8.346c0-3.355-1.981-5.333-5.344-5.333H8.359M9.568 15.127l-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273a3.76 3.76 0 0 0 2.222 2.225l.273.102-.273.1a3.76 3.76 0 0 0-2.222 2.226zM14.879 16.37a1.77 1.77 0 0 0-1.177-1.18 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178"
    />
  </Svg>
);
export default IconlystGenerateFolderFileLight;
