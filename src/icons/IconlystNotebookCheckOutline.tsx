import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookCheckOutline = ({
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
      d="M17.265 16.687h-6.859a.75.75 0 0 1 0-1.5h6.86a.75.75 0 0 1 0 1.5m0-3.707h-1.16a.75.75 0 0 1 0-1.5h1.16a.75.75 0 0 1 0 1.5M11.872 12.801c-.199 0-.39-.08-.53-.22l-1.719-1.718a.75.75 0 1 1 1.061-1.06l1.188 1.187 3.785-3.786a.75.75 0 0 1 1.061 1.061l-4.316 4.316a.75.75 0 0 1-.53.22M6.892 17.447H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5m0-4.7H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5m0-4.7H3.566a.75.75 0 1 1 0-1.5h3.326a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystNotebookCheckOutline;
