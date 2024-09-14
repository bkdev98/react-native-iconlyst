import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetRefreshOutline = ({
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
      d="M11.23 12.292c0-.56.453-1.022 1.021-1.022h.001a1.023 1.023 0 0 1 .005 2.045h-.005a1.023 1.023 0 0 1-1.023-1.023m1.021.478h.001m-.001 0h.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.941 12.29a5.31 5.31 0 1 1 10.62 0 5.31 5.31 0 0 1-10.62 0m5.311-3.81a3.81 3.81 0 1 0-.001 7.62 3.81 3.81 0 0 0 .001-7.62M16.97 2.282a.75.75 0 0 1 .935.5l.748 2.465a.75.75 0 0 1-.5.936l-2.452.743a.75.75 0 0 1-.435-1.435L17 4.965l-.53-1.747a.75.75 0 0 1 .5-.936"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.248 4.332a7.96 7.96 0 1 0 7.824 6.48.75.75 0 1 1 1.474-.278 9.46 9.46 0 1 1-3.375-5.619.75.75 0 1 1-.94 1.17 7.92 7.92 0 0 0-4.983-1.753"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetRefreshOutline;
