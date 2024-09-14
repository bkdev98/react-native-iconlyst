import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSyringeBulk = ({
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
      d="m13.74 17.838-.35.35a5.32 5.32 0 0 1-3.79 1.57c-1.18 0-2.3-.38-3.22-1.08-.2-.15-.39-.31-.57-.49a5 5 0 0 1-.49-.57c-.7-.92-1.07-2.04-1.07-3.22 0-1.43.55-2.78 1.56-3.79l4.76-4.75c.66-.67 1.48-1.04 2.3-1.04h.01c.78 0 1.52.32 2.14.94l3.22 3.22c1.3 1.3 1.26 3.09-.09 4.46l-.72.72z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m19.69 4.318 1.84 1.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.31-1.31-2 2-1.06-1.06 2-2-1.32-1.31a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.06 0l1.84 1.84h.01zM2.47 20.468l2.85-2.85c.15.2.31.39.49.57s.37.34.57.49l-2.85 2.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06M11.65 14.668c-.3.29-.3.76-.01 1.06l2.1 2.11 1.07-1.06-2.1-2.11a.754.754 0 0 0-1.06 0M13.2 12.049c-.3-.29-.3-.76 0-1.06.29-.29.77-.29 1.06 0l3.17 3.17-1.06 1.06z"
    />
  </Svg>
);
export default IconlystSyringeBulk;
