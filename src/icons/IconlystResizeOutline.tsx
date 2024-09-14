import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResizeOutline = ({
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
      d="M10.84 9.766a.82.82 0 0 0-.82.822v2.818c0 .454.367.821.82.821h2.819a.82.82 0 0 0 .822-.821v-2.818a.823.823 0 0 0-.822-.822zm-2.32.822a2.32 2.32 0 0 1 2.32-2.322h2.819a2.323 2.323 0 0 1 2.322 2.322v2.818a2.32 2.32 0 0 1-2.322 2.321H10.84a2.32 2.32 0 0 1-2.321-2.321zM21.78 2.47a.75.75 0 0 1 0 1.06l-3.935 3.936a.75.75 0 0 1-1.06-1.06L20.72 2.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.779 2.47a.75.75 0 0 1 .22.532l-.01 4.064a.75.75 0 0 1-1.5-.004l.008-3.31-3.31.007a.75.75 0 0 1-.004-1.5l4.064-.009c.2 0 .39.079.532.22M16.784 16.532a.75.75 0 0 1 1.06 0l3.936 3.936a.75.75 0 0 1-1.06 1.06l-3.936-3.935a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.238 16.184a.75.75 0 0 1 .752.748l.009 4.064a.75.75 0 0 1-.752.752l-4.064-.01a.75.75 0 0 1 .003-1.5l3.31.008-.006-3.31a.75.75 0 0 1 .748-.752M2.72 2.47a.75.75 0 0 1 1.06 0l3.936 3.935a.75.75 0 0 1-1.06 1.061L2.72 3.53a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 2.47a.75.75 0 0 1 .532-.22l4.064.009a.75.75 0 0 1-.004 1.5l-3.31-.007.007 3.31a.75.75 0 0 1-1.5.004L2.5 3.002c0-.2.079-.391.22-.532M7.716 16.532a.75.75 0 0 1 0 1.06L3.78 21.53a.75.75 0 1 1-1.06-1.061l3.935-3.936a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.26 16.184a.75.75 0 0 1 .749.751l-.007 3.31 3.31-.007a.75.75 0 1 1 .004 1.5l-4.064.01a.75.75 0 0 1-.752-.752l.009-4.064a.75.75 0 0 1 .752-.748"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResizeOutline;
