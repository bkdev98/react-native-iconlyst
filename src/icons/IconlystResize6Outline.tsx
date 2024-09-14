import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize6Outline = ({
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
      d="M9.533 14.465a.75.75 0 0 1 .22.532l-.009 3.677a.75.75 0 1 1-1.5-.003l.005-1.86-2.719 2.718a.75.75 0 0 1-1.06-1.06l2.718-2.72-1.861.005a.75.75 0 0 1-.003-1.5L9 14.246c.2 0 .391.078.532.22M16.812 15.754l1.86.004a.75.75 0 1 0 .003-1.5l-3.657-.008a.75.75 0 0 0-.772.752l.008 3.677a.75.75 0 1 0 1.5-.003l-.004-1.863 2.72 2.72a.75.75 0 1 0 1.06-1.061zM4.47 4.47a.75.75 0 0 1 1.06 0l2.72 2.72-.004-1.863a.75.75 0 1 1 1.5-.003L9.754 9a.75.75 0 0 1-.788.751l-3.64-.008a.75.75 0 1 1 .003-1.5l1.859.004L4.47 5.53a.75.75 0 0 1 0-1.06M19.53 4.47a.75.75 0 0 1 0 1.06l-2.72 2.72 1.863-.005a.75.75 0 0 1 .003 1.5l-3.678.008a.75.75 0 0 1-.752-.752l.01-3.677a.75.75 0 1 1 1.5.004l-.005 1.86 2.718-2.718a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize6Outline;
