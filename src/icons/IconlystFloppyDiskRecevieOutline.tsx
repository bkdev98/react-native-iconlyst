import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskRecevieOutline = ({
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
      d="M5.357 4.66c-.655.567-1.11 1.392-1.282 2.427a.75.75 0 0 1-1.48-.245c.221-1.336.829-2.493 1.781-3.317.954-.824 2.21-1.275 3.656-1.275h6.323c.863 0 1.69.352 2.286.975l4.476 4.661c.565.59.883 1.376.883 2.195v5.893c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.129a.75.75 0 1 1 1.5 0c0 1.319.409 2.381 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.279-.45 2.95-1.17.675-.726 1.084-1.788 1.084-3.106V10.08a1.68 1.68 0 0 0-.466-1.157l-4.476-4.661a1.66 1.66 0 0 0-1.203-.513H8.032c-1.126 0-2.022.346-2.675.91"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.97 8.74a.75.75 0 0 1 1.061 0l1.97 1.968a.75.75 0 0 1 0 1.06l-1.97 1.969a.75.75 0 0 1-1.06-1.06l1.438-1.439L7.971 9.8a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 11.238a.75.75 0 0 1 .75-.75h7.22a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M8.307 2.25a.75.75 0 0 1 .75.75v2.657a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75M10.14 16.592c-.598 0-1.083.485-1.083 1.084V21a.75.75 0 0 1-1.5 0v-3.324a2.583 2.583 0 0 1 2.583-2.584h4.222a2.584 2.584 0 0 1 2.583 2.584V21a.75.75 0 0 1-1.5 0v-3.324c0-.6-.485-1.084-1.083-1.084z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskRecevieOutline;
